import { ElMessage, ElMessageBox, type Action } from 'element-plus'
export const open = (message: string) => {
  ElMessageBox({
    title: 'Message',
    message: message,
    showClose: false
  })
}

export const open2 = () => {
  ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning'
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Delete completed'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled'
      })
    })
}

export const open3 = (message: string, callback: () => void) => {
  ElMessageBox.alert(`${message}`, 'Title', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      if (callback) {
        callback()
      }
    }
  })
}
