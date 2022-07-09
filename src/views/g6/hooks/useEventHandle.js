// 事件监听
export default (graph) => {
  graph.on('node:dragstart', e => {
    const model = e.item.get('model');
    model.fx = e.x;
    model.fy = e.y;
  });

  graph.on('node:drag', e => {
    graph.layout();
    const model = e.item.get('model');
    model.fx = e.x;
    model.fy = e.y;
  });

  graph.on('node:dragend', e => {
    e.item.get('model').fx = null;
    e.item.get('model').fy = null;
  });

  graph.on('node:click', e => {
    console.log(e.item.get('model'));
  });

  graph.on('edge:click', e => {
    console.log(e.item.get('model'));
  });

  // 通过点击节点创建边
  graph.on('aftercreateedge', e => {
    console.log(e);
  });
  
  // 鼠标移入、移出 => 添加/移除 hover状态
  graph.on('node:mouseenter', (evt) => {
    const { item } = evt;
    graph.setItemState(item, 'hover', true);
  });
  
  graph.on('node:mouseleave', (evt) => {
    const { item } = evt;
    graph.setItemState(item, 'hover', false);
  });
}