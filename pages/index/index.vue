<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <span @click="test">测试</span>
      <span @click="test2">测试2</span>
    </view>
  </view>
</template>

<script setup ts>
//实力化容器
import { useAcStore, request } from '../../store'
import { storeToRefs } from 'pinia'

const acStore = useAcStore()
let { count } = storeToRefs(acStore)
const test = () => {
  request(acStore.alarmSelect, {})
}
const test2 = () => {
  count.value++
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
