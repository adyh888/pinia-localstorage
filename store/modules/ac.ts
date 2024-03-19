/**
 * imports
 */
import { defineStore } from 'pinia'
import { ac } from '../../api'
import { AlarmSelectProperty } from '@mew/request/dist/ms/ac'

//创建AC的容器并导出容器
export const useAcStore = defineStore('ac', {
  state: () => {
    return {
      count: 10
    }
  },
  getters: {},
  actions: {
    async alarmSelect(json: AlarmSelectProperty) {
      return await ac.alarm.select(json)
    }
  },
  //本地持久化
  persist: true
})
