// создаем изображение смайлик
// рисуем его относительно точки (0, 0)
function drawSmile(svg) {
    let smile = svg.append("g")
        .style("stroke", "black")
        .style("stroke-width", 2)
        .style("fill", "white");
    //лицо
    smile.append("circle") 
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 50)
        .style("fill", "grey");

    // верхний глаз (вокруг)
    smile.append("circle") 
        .attr("cx", 20)
        .attr("cy", -20)
        .attr("r", 8);
    // верхний глаз (внутри)
    smile.append("circle") 
        .attr("cx", 20)
        .attr("cy", -25)
        .attr("r", 3)
        .style('fill', 'black');
    // нижний глаз (вокруг)
    smile.append("circle") 
        .attr("cx", 20)
        .attr("cy", 24)
        .attr("r", 8);
    // нижний глаз (внутри)
    smile.append("circle") 
        .attr("cx", 20)
        .attr("cy", 29)
        .attr("r", 3)
        .attr('fill', 'black');

    // ус 1
    smile.append('line')
        .attr('x1', 50)
        .attr('y1', -10)
        .attr('x2', 55)
        .attr('y2', -50);
    // ус 2
    smile.append('line')
        .attr('x1', 50)
        .attr('y1', -10)
        .attr('x2', 65)
        .attr('y2', -50);
    // ус 3
    smile.append('line')
        .attr('x1', 50)
        .attr('y1', -10)
        .attr('x2', 75)
        .attr('y2', -50);
    // ус 4
    smile.append('line')
        .attr('x1', 50)
        .attr('y1', 10)
        .attr('x2', 65)
        .attr('y2', 50);
    // ус 5
    smile.append('line')
        .attr('x1', 50)
        .attr('y1', 10)
        .attr('x2', 75)
        .attr('y2', 50);
    // ус 6
    smile.append('line')
        .attr('x1', 50)
        .attr('y1', 10)
        .attr('x2', 55)
        .attr('y2', 50);

    // // нос 1 ДРУГАЯ ВЕРСИЯ, ЭТО БЕЗ ЗАЛИВКИ
    // smile.append('line')
    //     .attr('x1', 50)
    //     .attr('y1', 10)
    //     .attr('x2', 85)
    //     .attr('y2', 0);
    // // нос 2
    // smile.append('line')
    //     .attr('x1', 50)
    //     .attr('y1', -10)
    //     .attr('x2', 85)
    //     .attr('y2', 0);

    // нос
    smile.append('polygon')
        .attr('points', '50,10 90,0 50,-10')
        .style('fill', 'grey');
    // кончик носа
    smile.append('circle')
        .attr('cx', 95)
        .attr('cy', 0)
        .attr('r', 5)
        .style('fill', 'pink');
    
    // хвост
    let hvost = d3.arc()
        .innerRadius(30)
        .outerRadius(30);
    smile.append('path')
        .attr('transform', 'translate(-75, -2)')
        .attr('d', hvost({startAngle: Math.PI /3 * 2, endAngle: Math.PI/3 * 4}))
        .style("stroke", "black");

    let uho1 = d3.arc()
        .innerRadius(10)
        .outerRadius(15);
    smile.append('path')
        .attr('transform', 'translate(-10, 20)')
        .attr('d', uho1({startAngle: Math.PI * 2, endAngle: Math.PI }))
        .style('stroke', 'black')
        .style('fill', 'grey');

    let uho2 = d3.arc()
        .innerRadius(10)
        .outerRadius(15);
    smile.append('path')
        .attr('transform', 'translate(-10, -20)')
        .attr('d', uho2({startAngle: Math.PI * 2, endAngle: Math.PI }))
        .style('stroke', 'black')
        .style('fill', 'grey');


    smile.append("circle") 
        .attr("cx", -10)
        .attr("cy", 20)
        .attr("r", 10)
        .attr('fill', 'pink');

    smile.append("circle") 
        .attr("cx", -10)
        .attr("cy", -20)
        .attr("r", 10)
        .attr('fill', 'pink');

    smile.append('polygon')
        .attr('points', '-8,-30 10,-30, 10,30 -8, 30')
        .style('fill', 'grey')
        .style('stroke', 'grey');



    // улыбка
    // let arc = d3.arc()
    //    .innerRadius(35)
    //    .outerRadius(35);    
    // smile.append("path")
    //    .attr("d", arc({startAngle: Math.PI /3 * 2, endAngle: Math.PI/3 * 4}))
    //    .style("stroke", "brown")

     return smile  
}   