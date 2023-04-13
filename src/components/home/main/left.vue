<script setup>
import { reactive, toRefs, ref, onMounted, getCurrentInstance, inject } from "vue";

let list = [
	{
		name: '线路条数',
		number: 62,
		unit: '条'
	},
	{
		name: '车辆数',
		number: 1213,
		unit: '辆'
	},
	{
		name: '线路总长度',
		number: 3803,
		unit: 'km'
	},
	{
		name: '站点个数',
		number: 2114,
		unit: '个'
	},
	{
		name: '万人公交保有量',
		number: 16,
		unit: '标台'
	},
	{
		name: '线路平均长度',
		number: 12,
		unit: 'km'
	},
	{
		name: '非直线系数',
		number: 1.6,
		unit: ''
	},
	{
		name: '旅游大巴车数量',
		number: 20,
		unit: '辆'
	},
	{
		name: '校车数量',
		number: 60,
		unit: '辆'
	},
	{
		name: '线路重复系数',
		number: 1.3,
		unit: ''
	},
	{
		name: '线路密度',
		number: 1.3,
		unit: ''
	},
	{
		name: '当日换乘系数',
		number: 1.3,
		unit: ''
	},
	{
		name: '充电桩数量',
		number: 322,
		unit: ''
	},
	{
		name: '空调充电桩数量',
		number: 122,
		unit: ''
	}
];
let config = {
	data: [
		{
			name: '常规线路',
			value: 55
		},
		{
			name: '乡镇线路',
			value: 120
		},
		{
			name: '环湖旅游线路',
			value: 78
		},
		{
			name: '扶贫线路',
			value: 66
		},
		{
			name: '社区微循环',
			value: 66
		},
		{
			name: '健康专线',
			value: 66
		},
		{
			name: '红色旅游线路',
			value: 66
		}
	],
	lineWidth: 10,
	radius: '70%',
	activeRadius: '75%',
	digitalFlopStyle: {
		fontSize: 18
	},
};
let time = reactive({
	value3: '',
	format: ''
});
function handleChange(data) {
	time.value3 = data;
	time.format = "YYYY-MM-DD hh:mm:ss";
	console.log(data, 'data', time);
	
	
}
function handleBlur(data) {
	console.log(data, 'data');
	time.format = "YYYY-MM-DD hh:mm:ss";
	
	// time.format = "YYYYMMDD hh:mm:ss";
	
	
}
function handleFocus(params) {
	time.format = "YYYYMMDD hh:mm:ss";
	
	
}
function handleClick(params) {
	console.log(params, '123333');
	
	
}
</script>

<template>
	<div class="g-home-main-left g-c-white">
		<div class="g-title1">
			运营总体情况
		</div>
		<div class="g-flex g-fw-w g-m-t-10">
			<div v-for="(item, index) in list" :key="index" class="_flop-box">
				<div>{{ item.name }}</div>
				<div class="g-fs-24 g-c-blue">
					<span class="g-weight-500">{{ item.number }}</span><span class="g-fs-14">{{ item.unit }}</span>
				</div>
			</div>
		</div>
		<div class="g-flex g-fs-14 g-jc-c">
			<div class="g-flex-1">
				<dv-active-ring-chart :config="config" style="width:150px;height:150px" />
			</div>
			<div class="g-flex-1">
				<div v-for="(item, index) in config.data" :key="index">
					{{ item.name }}<span class="g-c-yellow g-weight-500 _line-num">{{ item.value }}</span>条
				</div>
			</div>
		</div>
		

		<div class="g-title1">
			支付方式占比
		</div>
		<div class="g-title1">
			线网、战场&站点统计分析（按功能区）
		</div>
		<div class="g-title1">
			车辆&客流统计（按功能区）
		</div>
		{{ format }}
		<el-date-picker
			v-model="time.value3"
			type="datetime"
			placeholder="Select date and time"
			:default-time="defaultTime"
			:format="time.format"
			value-format="YYYY-MM-DD hh:mm:ss"
			@click="handleClick"
			@change="handleChange"
			@focus="handleFocus"
			@blur="handleBlur"
		/>
	</div>
</template>

<style lang="scss">
	.g-home-main-left {
		min-width: 300px;
		width: 20vw;
		height: calc(100vh - 60px);
		border-radius: 20px;
		margin: 40px 10px 20px;
		background: rgba(0,0,0,0.5);
		padding: 20px;
		position: relative;
		text-align: left;
		z-index: 1000;
		.active-ring-name {
			font-size: 14px !important;
			animation: infinite
		}
		._flop-box {
			width: 33.3%;
			text-align: center;
		}
		._line-num {
			line-height: 12px;
			font-size: 20px;
			margin: 0 5px 0 15px;
		}
	}
</style>