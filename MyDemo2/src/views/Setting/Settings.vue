<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>setting</el-breadcrumb-item>
    <el-breadcrumb-item>setting</el-breadcrumb-item>
  </el-breadcrumb>
  <!-- <div class="mb-4">
    <el-button disabled>Default</el-button>
    <el-button type="primary" disabled>Primary</el-button>
    <el-button type="success" disabled>Success</el-button>
    <el-button type="info" disabled>Info</el-button>
    <el-button type="warning" disabled>Warning</el-button>
    <el-button type="danger" disabled>Danger</el-button>
  </div>

  <div class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </div>

  <div class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </div>

  <div>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </div>

  <hr/>
  <div>
    <el-button type="primary" :icon="Edit" />
    <el-button type="primary" :icon="Share" />
    <el-button type="primary" :icon="Delete" />
    <el-button type="primary" :icon="Search">Search</el-button>
    <el-button type="primary">
      Upload<el-icon class="el-icon--right"><Upload /></el-icon>
    </el-button>
  </div>

  <hr/>
  <el-button-group>
    <el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>
    <el-button type="primary">
      Next Page<el-icon class="el-icon--right"><ArrowRight /></el-icon>
    </el-button>
  </el-button-group>

  <el-button-group class="ml-4">
    <el-button type="primary" :icon="Edit" />
    <el-button type="primary" :icon="Share" />
    <el-button type="primary" :icon="Delete" />
  </el-button-group>

  <hr/>
  <el-button type="primary" loading>Loading</el-button>
  <el-button type="primary" :loading-icon="Eleme" loading>Loading</el-button>
  <el-button type="primary" loading>
    <template #loading>
      <div class="custom-loading">
        <svg class="circular" viewBox="-10, -10, 50, 50">
          <path
            class="path"
            d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          "
            style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
          />
        </svg>
      </div>
    </template>
    Loading
  </el-button>

  <hr/>
  <div>
    <el-button color="#626aef" :dark="false">Default</el-button>
    <el-button color="#626aef" :dark="true" plain>Plain</el-button>

    <el-button color="#626aef" :dark="true" disabled>Disabled</el-button>
    <el-button color="#626aef" :dark="false" disabled plain>
      Disabled Plain
    </el-button>
  </div>

  <hr/>
  <p>
    with extra class <b>is-loading</b>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  </p>
  <el-icon :size="20">
    <Edit />
  </el-icon>
  <el-icon color="#409efc" class="no-inherit">
    <Share />
  </el-icon>
  <el-icon>
    <Delete />
  </el-icon>
  <el-icon class="is-loading">
    <Loading />
  </el-icon>
  <el-button type="primary">
    <el-icon style="vertical-align: middle">
      <Search />
    </el-icon>
    <span style="vertical-align: middle"> Search </span>
  </el-button>

  <hr/> -->
  <!-- <div class="m-4">
    <p>Child options expand when clicked (default)</p>
    <el-cascader v-model="value" :options="options" @change="handleChange" />
  </div>
  <div class="m-4">
    <p>Child options expand when hovered</p>
    <el-cascader v-model="value" :options="options" :props="props" @change="handleChange" />
  </div>

  <hr />
  <el-checkbox-group v-model="checkedCities" :min="1" :max="5">
    <el-checkbox v-for="city in cities" :key="city" :label="city" :value="city">
      {{ city }}
    </el-checkbox>
  </el-checkbox-group>

  <hr />
  <el-cascader :options="options2" /> -->

  <!-- <hr />
  <el-radio-group v-model="size" aria-label="size control">
    <el-radio-button value="large">large</el-radio-button>
    <el-radio-button value="default">default</el-radio-button>
    <el-radio-button value="small">small</el-radio-button>
  </el-radio-group>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker v-model="value1" type="date" placeholder="Pick a day" :size="size" />
    </div>
    <div class="block">
      <span class="demonstration">Picker with quick options</span>
      <el-date-picker
        v-model="value2"
        type="date"
        placeholder="Pick a day"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        :size="size"
      />
    </div>
  </div>

  <hr />
  <div class="block">
    <span class="demonstration">Week</span>
    <el-date-picker v-model="value3" type="week" format="[Week] ww" placeholder="Pick a week" />
  </div> -->

  <hr/>
  <div class="block">
    <span class="demonstration">daterange</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
    />
  </div>

  <hr/>
  <div class="block">
    <span class="demonstration">With default time</span>
    <el-date-picker
      v-model="value3"
      type="datetime"
      placeholder="Select date and time"
      :default-time="defaultTime"
    />
  </div>

  <hr/>
  <el-input
    v-model="input"
    style="width: 240px"
    placeholder="Please input"
    :formatter="(value: any) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
    :parser="(value: any) => value.replace(/\$\s?|(,*)/g, '')"
  />

  <hr/>
  <el-input-tag
    v-model="input1"
    placeholder="Please input"
    aria-label="Please click the Enter key after input"
  />

  <hr/>
  <el-select-v2
    v-model="value4"
    :options="options3"
    placeholder="Please select"
    size="large"
    style="width: 240px"
  />

  <hr/>
  <div class="slider-demo-block">
    <span class="demonstration">Default value</span>
    <el-slider v-model="value5" :format-tooltip="formatTooltip" />
  </div>

  <hr/>
  <el-switch
    v-model="value6"
    class="mb-2"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />

  <hr/>
  <div class="example-basic">
    <el-time-picker
      v-model="value7"
      :disabled-hours="disabledHours"
      :disabled-minutes="disabledMinutes"
      :disabled-seconds="disabledSeconds"
      placeholder="Arbitrary time"
    />
  </div>

  <hr/>
  <el-calendar ref="calendar">
    <template #header="{ date }">
      <span>Custom header content</span>
      <span>{{ date }}</span>
      <el-button-group>
        <el-button size="small" @click="selectDate('prev-year')">
          Previous Year
        </el-button>
        <el-button size="small" @click="selectDate('prev-month')">
          Previous Month
        </el-button>
        <el-button size="small" @click="selectDate('today')">Today</el-button>
        <el-button size="small" @click="selectDate('next-month')">
          Next Month
        </el-button>
        <el-button size="small" @click="selectDate('next-year')">
          Next Year
        </el-button>
      </el-button-group>
    </template>
  </el-calendar>
</template>

<script lang="ts" setup>
import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue'
import { Share, Upload } from '@element-plus/icons-vue'

import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'

import { Eleme } from '@element-plus/icons-vue'
import { ref } from 'vue'

const value = ref([])

const props = {
  expandTrigger: 'hover' as const
}

const handleChange = (value: string) => {
  console.log(value)
}

// const options = [
//   {
//     value: 'guide',
//     label: 'Guide',
//     children: [
//       {
//         value: 'disciplines',
//         label: 'Disciplines',
//         children: [
//           {
//             value: 'consistency',
//             label: 'Consistency'
//           },
//           {
//             value: 'feedback',
//             label: 'Feedback'
//           },
//           {
//             value: 'efficiency',
//             label: 'Efficiency'
//           },
//           {
//             value: 'controllability',
//             label: 'Controllability'
//           }
//         ]
//       },
//       {
//         value: 'navigation',
//         label: 'Navigation',
//         children: [
//           {
//             value: 'side nav',
//             label: 'Side Navigation'
//           },
//           {
//             value: 'top nav',
//             label: 'Top Navigation'
//           }
//         ]
//       }
//     ]
//   },
//   {
//     value: 'component',
//     label: 'Component',
//     children: [
//       {
//         value: 'basic',
//         label: 'Basic',
//         children: [
//           {
//             value: 'layout',
//             label: 'Layout'
//           },
//           {
//             value: 'color',
//             label: 'Color'
//           },
//           {
//             value: 'typography',
//             label: 'Typography'
//           },
//           {
//             value: 'icon',
//             label: 'Icon'
//           },
//           {
//             value: 'button',
//             label: 'Button'
//           }
//         ]
//       },
//       {
//         value: 'form',
//         label: 'Form',
//         children: [
//           {
//             value: 'radio',
//             label: 'Radio'
//           },
//           {
//             value: 'checkbox',
//             label: 'Checkbox'
//           },
//           {
//             value: 'input',
//             label: 'Input'
//           },
//           {
//             value: 'input-number',
//             label: 'InputNumber'
//           },
//           {
//             value: 'select',
//             label: 'Select'
//           },
//           {
//             value: 'cascader',
//             label: 'Cascader'
//           },
//           {
//             value: 'switch',
//             label: 'Switch'
//           },
//           {
//             value: 'slider',
//             label: 'Slider'
//           },
//           {
//             value: 'time-picker',
//             label: 'TimePicker'
//           },
//           {
//             value: 'date-picker',
//             label: 'DatePicker'
//           },
//           {
//             value: 'datetime-picker',
//             label: 'DateTimePicker'
//           },
//           {
//             value: 'upload',
//             label: 'Upload'
//           },
//           {
//             value: 'rate',
//             label: 'Rate'
//           },
//           {
//             value: 'form',
//             label: 'Form'
//           }
//         ]
//       },
//       {
//         value: 'data',
//         label: 'Data',
//         children: [
//           {
//             value: 'table',
//             label: 'Table'
//           },
//           {
//             value: 'tag',
//             label: 'Tag'
//           },
//           {
//             value: 'progress',
//             label: 'Progress'
//           },
//           {
//             value: 'tree',
//             label: 'Tree'
//           },
//           {
//             value: 'pagination',
//             label: 'Pagination'
//           },
//           {
//             value: 'badge',
//             label: 'Badge'
//           }
//         ]
//       },
//       {
//         value: 'notice',
//         label: 'Notice',
//         children: [
//           {
//             value: 'alert',
//             label: 'Alert'
//           },
//           {
//             value: 'loading',
//             label: 'Loading'
//           },
//           {
//             value: 'message',
//             label: 'Message'
//           },
//           {
//             value: 'message-box',
//             label: 'MessageBox'
//           },
//           {
//             value: 'notification',
//             label: 'Notification'
//           }
//         ]
//       },
//       {
//         value: 'navigation',
//         label: 'Navigation',
//         children: [
//           {
//             value: 'menu',
//             label: 'Menu'
//           },
//           {
//             value: 'tabs',
//             label: 'Tabs'
//           },
//           {
//             value: 'breadcrumb',
//             label: 'Breadcrumb'
//           },
//           {
//             value: 'dropdown',
//             label: 'Dropdown'
//           },
//           {
//             value: 'steps',
//             label: 'Steps'
//           }
//         ]
//       },
//       {
//         value: 'others',
//         label: 'Others',
//         children: [
//           {
//             value: 'dialog',
//             label: 'Dialog'
//           },
//           {
//             value: 'tooltip',
//             label: 'Tooltip'
//           },
//           {
//             value: 'popover',
//             label: 'Popover'
//           },
//           {
//             value: 'card',
//             label: 'Card'
//           },
//           {
//             value: 'carousel',
//             label: 'Carousel'
//           },
//           {
//             value: 'collapse',
//             label: 'Collapse'
//           }
//         ]
//       }
//     ]
//   },
//   {
//     value: 'resource',
//     label: 'Resource',
//     children: [
//       {
//         value: 'axure',
//         label: 'Axure Components'
//       },
//       {
//         value: 'sketch',
//         label: 'Sketch Templates'
//       },
//       {
//         value: 'docs',
//         label: 'Design Documentation'
//       }
//     ]
//   }
// ]

// 多选框
// const checkedCities = ref(['Shanghai', 'Guangzhou'])
// const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

// // 级联选择器
// const options2 = [
//   {
//     value: 'guide',
//     label: 'Guide',
//     disabled: true,
//     children: [
//       {
//         value: 'disciplines',
//         label: 'Disciplines',
//         children: [
//           {
//             value: 'consistency',
//             label: 'Consistency'
//           },
//           {
//             value: 'feedback',
//             label: 'Feedback'
//           },
//           {
//             value: 'efficiency',
//             label: 'Efficiency'
//           },
//           {
//             value: 'controllability',
//             label: 'Controllability'
//           }
//         ]
//       },
//       {
//         value: 'navigation',
//         label: 'Navigation',
//         children: [
//           {
//             value: 'side nav',
//             label: 'Side Navigation'
//           },
//           {
//             value: 'top nav',
//             label: 'Top Navigation'
//           }
//         ]
//       }
//     ]
//   },
//   {
//     value: 'component',
//     label: 'Component',
//     children: [
//       {
//         value: 'basic',
//         label: 'Basic',
//         children: [
//           {
//             value: 'layout',
//             label: 'Layout'
//           },
//           {
//             value: 'color',
//             label: 'Color'
//           },
//           {
//             value: 'typography',
//             label: 'Typography'
//           },
//           {
//             value: 'icon',
//             label: 'Icon'
//           },
//           {
//             value: 'button',
//             label: 'Button'
//           }
//         ]
//       },
//       {
//         value: 'form',
//         label: 'Form',
//         children: [
//           {
//             value: 'radio',
//             label: 'Radio'
//           },
//           {
//             value: 'checkbox',
//             label: 'Checkbox'
//           },
//           {
//             value: 'input',
//             label: 'Input'
//           },
//           {
//             value: 'input-number',
//             label: 'InputNumber'
//           },
//           {
//             value: 'select',
//             label: 'Select'
//           },
//           {
//             value: 'cascader',
//             label: 'Cascader'
//           },
//           {
//             value: 'switch',
//             label: 'Switch'
//           },
//           {
//             value: 'slider',
//             label: 'Slider'
//           },
//           {
//             value: 'time-picker',
//             label: 'TimePicker'
//           },
//           {
//             value: 'date-picker',
//             label: 'DatePicker'
//           },
//           {
//             value: 'datetime-picker',
//             label: 'DateTimePicker'
//           },
//           {
//             value: 'upload',
//             label: 'Upload'
//           },
//           {
//             value: 'rate',
//             label: 'Rate'
//           },
//           {
//             value: 'form',
//             label: 'Form'
//           }
//         ]
//       },
//       {
//         value: 'data',
//         label: 'Data',
//         children: [
//           {
//             value: 'table',
//             label: 'Table'
//           },
//           {
//             value: 'tag',
//             label: 'Tag'
//           },
//           {
//             value: 'progress',
//             label: 'Progress'
//           },
//           {
//             value: 'tree',
//             label: 'Tree'
//           },
//           {
//             value: 'pagination',
//             label: 'Pagination'
//           },
//           {
//             value: 'badge',
//             label: 'Badge'
//           }
//         ]
//       },
//       {
//         value: 'notice',
//         label: 'Notice',
//         children: [
//           {
//             value: 'alert',
//             label: 'Alert'
//           },
//           {
//             value: 'loading',
//             label: 'Loading'
//           },
//           {
//             value: 'message',
//             label: 'Message'
//           },
//           {
//             value: 'message-box',
//             label: 'MessageBox'
//           },
//           {
//             value: 'notification',
//             label: 'Notification'
//           }
//         ]
//       },
//       {
//         value: 'navigation',
//         label: 'Navigation',
//         children: [
//           {
//             value: 'menu',
//             label: 'Menu'
//           },
//           {
//             value: 'tabs',
//             label: 'Tabs'
//           },
//           {
//             value: 'breadcrumb',
//             label: 'Breadcrumb'
//           },
//           {
//             value: 'dropdown',
//             label: 'Dropdown'
//           },
//           {
//             value: 'steps',
//             label: 'Steps'
//           }
//         ]
//       },
//       {
//         value: 'others',
//         label: 'Others',
//         children: [
//           {
//             value: 'dialog',
//             label: 'Dialog'
//           },
//           {
//             value: 'tooltip',
//             label: 'Tooltip'
//           },
//           {
//             value: 'popover',
//             label: 'Popover'
//           },
//           {
//             value: 'card',
//             label: 'Card'
//           },
//           {
//             value: 'carousel',
//             label: 'Carousel'
//           },
//           {
//             value: 'collapse',
//             label: 'Collapse'
//           }
//         ]
//       }
//     ]
//   },
//   {
//     value: 'resource',
//     label: 'Resource',
//     disabled: true,
//     children: [
//       {
//         value: 'axure',
//         label: 'Axure Components'
//       },
//       {
//         value: 'sketch',
//         label: 'Sketch Templates'
//       },
//       {
//         value: 'docs',
//         label: 'Design Documentation'
//       }
//     ]
//   }
// ]

// 日期选择
const size = ref<'default' | 'large' | 'small'>('default')

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')

// const shortcuts = [
//   {
//     text: 'Today',
//     value: new Date()
//   },
//   {
//     text: 'Yesterday',
//     value: () => {
//       const date = new Date()
//       date.setTime(date.getTime() - 3600 * 1000 * 24)
//       return date
//     }
//   },
//   {
//     text: 'A week ago',
//     value: () => {
//       const date = new Date()
//       date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
//       return date
//     }
//   },
//   {
//     text: 'A Mounth ago',
//     value: () => {
//       const date = new Date()
//       date.setTime(date.getTime() - 3600 * 1000 * 24 *30 )
//       return date
//     }
//   }
// ]

// const disabledDate = (time: Date) => {
//   return time.getTime() > Date.now()
// }

// 时间选择器
const defaultTime = new Date(2000, 1, 1, 12, 0, 0)

// 格式化
const input = ref('')

const input1 = ref<string[]>()


// 虚拟选择器
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value4 = ref()
const options3 = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))

const value5 = ref(0)

const formatTooltip = (val: number) => {
  return val / 100
}

const value6 = ref(true)

const value7 = ref(new Date(2016, 9, 10, 18, 30))

const makeRange = (start: number, end: number) => {
  const result: number[] = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

const disabledHours = () => {
  return makeRange(0, 16).concat(makeRange(19, 23))
}
const disabledMinutes = (hour: number) => {
  if (hour === 17) {
    return makeRange(0, 29)
  }
  if (hour === 18) {
    return makeRange(31, 59)
  }
}
const disabledSeconds = (hour: number, minute: number) => {
  if (hour === 18 && minute === 30) {
    return makeRange(1, 59)
  }
}

// 日历
import type { CalendarDateType, CalendarInstance } from 'element-plus'

const calendar = ref<CalendarInstance>()

const selectDate = (val: CalendarDateType) => {
  if (!calendar.value) return
  calendar.value.selectDate(val)
}
</script>

<style lang="scss" scoped>
.el-button .custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
}
.el-button .custom-loading .circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-button-text-color);
  stroke-linecap: round;
}

.slider-demo-block {
  max-width: 600px;
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
.slider-demo-block .demonstration {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  line-height: 44px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}
.slider-demo-block .demonstration + .el-slider {
  flex: 0 0 70%;
}
</style>
