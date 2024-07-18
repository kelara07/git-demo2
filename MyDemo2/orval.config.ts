import type { Options } from 'orval'
import { defineConfig } from 'orval'
import { mapValues } from 'lodash'

const options = {
  // NJ
  WnrAPI: 'http://192.168.50.66:7278/swagger/v1/swagger.json'
  // WnrRpt: 'http://192.168.50.66:5035/swagger/v1/swagger.yaml',
  // GIFWApi: 'http://192.168.50.66:7049/swagger/v1/swagger.yaml'
  // LOCAL
  // WnrAPI: 'http://host.docker.internal:5271/swagger/v1/swagger.yaml'
  // WnrRpt: 'http://host.docker.internal:5035/swagger/v1/swagger.yaml'
  // GIFWApi: 'http://host.docker.internal:5049/swagger/v1/swagger.yaml'
}

export default defineConfig(
  mapValues(
    options,
    (input, project) =>
      ({
        input,
        output: {
          client: 'axios-functions',
          schemas: `./src/api/models/${project}`,
          target: `./src/api/services/${project}/index.ts`,
          override: {
            mutator: {
              path: './src/utils/request.ts',
              name: 'customInstance'
            }
          },
          clean: true
        }
      }) satisfies Options
  )
)
