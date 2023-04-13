<template>
	<div id="map" class="map" />
	<div class="echartss">
		<!-- <dv-border-box-8>dv-border-box-8</dv-border-box-8> -->
	</div>
</template>

<script setup>
import { reactive, toRefs, ref, onMounted, getCurrentInstance } from "vue";
import { Scene, PointLayer, LineLayer, PolygonLayer } from "@antv/l7";
import { GaodeMapV2 } from "@antv/l7-maps";
import qipao from "@assets/json/qipao.json";
import guodao from "@assets/json/guodao.json";
import shengdao from "@assets/json/shengdao.json";
import roadline from "@assets/json/roadline.json";
import gongnengqu from "@assets/json/gongnengqu.json";

const { proxy } = getCurrentInstance();
const form = ref(null);
const params = reactive({
	name: "",
});
const refparams = toRefs(params);
let scene = {};

const initSence = async () => {
	scene = new Scene({
		id: "map",
		map: new GaodeMapV2({
			pitch: 0,
			style: "dark",
			center: [113.376892, 22.271644],
			zoom: 10,
			minZoom: 1
		}),
	});
};
const initBaseLine = async () => {
	let layer = new LineLayer({ zIndex: 2, name: "guodaolayer" })
		.source(guodao)
		.color('rgba(0, 255, 240, 0.3)')
		.size(2)
		.shape('line');
	scene.addLayer(layer);
	let layer1 = new LineLayer({ zIndex: 2, name: "roadlinelayer", visible: false })
		.source(roadline)
		.color('#005dff')
		.size(1.2)
		.shape('line')
		.style({
			lineType: 'dash',
			dashArray: [3, 1]
		});
	scene.addLayer(layer1);
	let layer2 = new LineLayer({ zIndex: 2, name: "shengdaolayer" })
		.source(shengdao)
		.color('#005dff')
		.size(0.8)
		.shape('line')
		.style({
			lineType: 'dash',
			dashArray: [3, 1]
		});
	scene.addLayer(layer2);
	// 特别图层功能区处理成线图层
	let layer3 = new PolygonLayer({ zIndex: 2, name: "gongnengqulayer" })
		.source(gongnengqu)
		.color('#6f6f6f')
		.size(0.5)
		.shape('line')
		.style({
			lineType: 'dash',
			dashArray: [3, 1]
		});
	scene.addLayer(layer3);
};
const initBasePoypon = async () => {
	// let layer = new PolygonLayer({zIndex:1,name:"gongnengqulayer"})
	//   .source(gongnengqu)
	//   .color('#ff00ff')
	//   .shape('fill')
	//   .style({
	//     opacity: 1.0
	//   });
	// scene.addLayer(layer)
};
const loadFlyLine = async () => {
	const flydata = [
		{
			coord: [
				[113.6023778009281, 22.351611259390058],
				[113.5819687847112, 22.268571071782116]
			]
		},
		{
			coord: [
				[113.35735564702186, 22.045054325644088],
				[113.5819687847112, 22.268571071782116]
			]
		},
		{
			coord: [
				[113.5819687847112, 22.268571071782116],
				[113.6023778009281, 22.351611259390058]
			]
		},
		{
			coord: [
				[113.5819687847112, 22.268571071782116],
				[113.35735564702186, 22.045054325644088]
			]
		},
		{
			coord: [
				[113.30226495936533, 22.211334271525658],
				[113.5819687847112, 22.268571071782116]
			]
		},
		{
			coord: [
				[113.5819687847112, 22.268571071782116],
				[113.30226495936533, 22.211334271525658]
			]
		},
		{
			coord: [
				[113.55346858628339, 22.110493374832203],
				[113.5819687847112, 22.268571071782116]
			]
		},
		{
			coord: [
				[113.35735564702186, 22.045054325644088],
				[113.30226495936533, 22.211334271525658]
			]
		},
		{
			coord: [
				[113.30226495936533, 22.211334271525658],
				[113.35735564702186, 22.045054325644088]
			]
		},
		{
			coord: [
				[113.24430892654813, 21.961412622127853],
				[113.5819687847112, 22.268571071782116]
			]
		}
	];
	const flyLine = new LineLayer({ zIndex: 3, name: "flylayer", blend: "normal" })
		.source(flydata, {
			parser: {
				type: "json",
				coordinates: "coord",
			},
		})
		.shape("arc")
		.size(3)
		.active(true)
		.animate({
			interval: 0.1,
			trailLength: 1,
			duration: 0.6,
		})
		.style({
			opacity: 1,
			segmentNumber: 15,
			sourceColor: '#ff9900', // 起点颜色
			targetColor: '#64f985' // 终点颜色
		});
	scene.addLayer(flyLine);
	const bubble = new PointLayer({ zIndex: 4, name: "bubbleLayer" })
		.source(qipao)
		.shape('circle')
		.animate({
			speed: 2,
			rings: 5
		})
		.size('od', [50, 60])
		.color('#64e3f9');
	scene.addLayer(bubble);
};
onMounted(async () => {
	await initSence();
	await initBaseLine();
	await initBasePoypon();
	await loadFlyLine();
});
</script> 

<style lang='scss' scoped>
::-webkit-scrollbar {
  display: none;
}
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>
