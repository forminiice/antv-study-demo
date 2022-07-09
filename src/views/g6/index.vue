<template>
  <div ref="view" class="view"></div>
</template>

<script setup>
  import { ref, reactive, onMounted, toRaw } from "vue"

  import useInitGraph from "./hooks/useInitGraph"
  import useEventHandle from './hooks/useEventHandle';
  import useRegNodes from "./hooks/useRegNodes"
  
  const view = ref();
  let graph;

  let data = reactive({
    nodes: [
      { label: 'p1', id: "p1" },
      { label: 'p2', id: "p2" },
      { label: '自定义节点', id: "p3", type: "circle-animate",  style: { fill: "#fff" } },
      // { label: 'p3', id: "p3" },
      // { label: 'p4', id: "p4" },
      // { label: 'p5', id: "p5" },
      // { label: 'p6', id: "p6" },
      // { label: 'p7', id: "p7" }
    ],
    edges: [
      { source: 'p1', target: 'p2', label: 'b1' },
      // { source: 'p1', target: 'p3' },
      // { source: 'p1', target: 'p4' },
      // { source: 'p1', target: 'p5' }
    ],
    combos: []
  })

  useRegNodes();
  onMounted(() => {
    graph = useInitGraph(view.value, data);
    // 关闭局部渲染
    // graph.get('canvas').set('localRefresh', false)

    useEventHandle(graph);
    // setInterval(() => {
    //   graph.layout();
    // }, 1000);
  })

</script>

<style lang="scss" scoped>
  .view {
    height: 100vh;
    width: 100vw;
    background-color: #000000dd;
  }
</style>
