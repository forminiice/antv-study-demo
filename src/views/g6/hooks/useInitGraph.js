import G6 from '@antv/g6';

// 初始化画布
export default (el, data) => {
  let graph =  new G6.Graph({
    container: el,
    width: el.clientWidth,
    height: el.clientHeight,
    linkCenter: true,
    modes: {
      default: ['create-edge', 'drag-canvas', 'zoom-canvas', 'drag-node']
    },
    layout: {
      type: 'force',
      linkDistance: 300,
      nodeStrength: 0, //节点作用力，正数代表节点之间的引力作用，负数代表节点之间的斥力作用
      nodeSize: 100,
      preventOverlap: true, // 防止节点间碰撞
      nodeSpacing: 50,
      // alpha: 1, //当前的迭代收敛阈值
      alphaDecay: 0.05, //迭代阈值的衰减率
      // alphaMin: 0.1, //停止迭代的阈值
      onTick: () => {}
      // gpuEnabled: true, // 是否启用GPU
    },
    defaultNode: {
      size: [40, 40],
      style: {
        stroke: 'red',
        lineWidth: 3,
        shadowColor: 'yellow',
        shadowBlur: 10,
        color: '#fff'
        // opacity: 0.1
      },
      labelCfg: {
        position: 'top',
        style: {
          fill: '#fff'
        }
      }
    },
    nodeStateStyles: {
      hover: {
        stroke: 'steelblue',
      }
    },
    defaultEdge: {
      size: 1,
      color: '#e2e2e2',
      labelCfg: {
        autoRotate: true,
        refY: 5,
        style: {
          fill: '#fff'
        }
      },
      style: {
        endArrow: {
          fill: '#eee',
          path: G6.Arrow.triangle(10, 12, 25),
          d: 25
        }
      }
    },
  });
  
  graph.data(data);
  graph.render();

  return graph;
}