document.addEventListener("DOMContentLoaded", function() {
    const width = 600;
    const height = 600;      
    const svg = d3.select("svg")
       .attr("width", width)
	   .attr("height", height) ;

    let pict = drawSmile(svg);
    pict.attr("transform", "translate(200, 200)");

    let pict1 = drawSmile(svg); 
    pict1.attr("transform", `translate(400, 400) scale(1.5, 1.5) rotate(180)`);

    // Это я сделал сам
    let settingForm = document.getElementById('setting');
    let drawBttn = document.getElementById('drawButton');
    drawBttn.addEventListener('click', function() {
        draw(settingForm);
    })
    // Это я сделал сам

    let deleteBttn = document.getElementById('deleteButton');
    deleteBttn.addEventListener('click', function() {
        svg.selectAll('*').remove();
    })

    d3.select("#animationCheckBox").on('change', function() {
        d3.selectAll('.animationElements').style('display', this.checked ? 'inline-block' : 'none');
        d3.select('#drawButton').style('display', this.checked ? 'none' : 'inline-block');
    })

    let animationButton = document.getElementById('animateButton');
    animationButton.addEventListener('click', function() {
        runAnimation(settingForm);
    })

    d3.select('#vklyuchitPut').on('change', function() {
        d3.selectAll('.ubrat').style('display', this.checked ? 'none' : 'inline-block');
        d3.selectAll('.dobavit').style('display', this.checked ? 'inline-block' : 'none');
    })
})

const draw = (dataForm) => {
	const svg = d3.select("svg")
    let pict = drawSmile(svg)
    pict.attr("transform", `translate(${dataForm.cx.value},
                                      ${dataForm.cy.value})
                            scale(${dataForm.mx.value},
                                  ${dataForm.my.value})
                            rotate(${dataForm.rotate.value})`);
}

const runAnimation = (dataForm) => {
    const svg = d3.select('svg');
    let pict = drawSmile(svg);

    if (!d3.select('#vklyuchitPut').node().checked) {
        animEff = document.getElementById('animationEffect');
        selectEff = animEff.value;
        if (selectEff == 'linear') {
            pict.attr("transform", `translate(${dataForm.cx.value}, 
                                            ${dataForm.cy.value})
                                    scale(${dataForm.mx.value},
                                        ${dataForm.my.value})
                                    rotate(${dataForm.rotate.value})`)
            .transition()
            .duration(dataForm.animSpeed.value)
            .ease(d3.easeLinear)
            .attr("transform", `translate(${dataForm.cx2.value}, 
                                        ${dataForm.cy2.value})
                                scale(${dataForm.mx2.value},
                                    ${dataForm.my2.value})
                                rotate(${dataForm.rotate2.value})`);
        } else if (selectEff == 'bounce') {


            pict.attr("transform", `translate(${dataForm.cx.value}, 
                                            ${dataForm.cy.value})
                                    scale(${dataForm.mx.value},
                                        ${dataForm.my.value})
                                    rotate(${dataForm.rotate.value})`)
            .transition()
            .duration(dataForm.animSpeed.value)
            .ease(d3.easeBounce)
            .attr("transform", `translate(${dataForm.cx2.value}, 
                                        ${dataForm.cy2.value})
                                scale(${dataForm.mx2.value},
                                    ${dataForm.my2.value})
                                rotate(${dataForm.rotate2.value})`);
        } else if (selectEff == 'elastic') {
            pict.attr("transform", `translate(${dataForm.cx.value}, 
                                            ${dataForm.cy.value})
                                    scale(${dataForm.mx.value},
                                        ${dataForm.my.value})
                                    rotate(${dataForm.rotate.value})`)
            .transition()
            .duration(dataForm.animSpeed.value)
            .ease(d3.easeElastic)
            .attr("transform", `translate(${dataForm.cx2.value}, 
                                        ${dataForm.cy2.value})
                                scale(${dataForm.mx2.value},
                                    ${dataForm.my2.value})
                                rotate(${dataForm.rotate2.value})`);
        }
    } else {
        let path = drawPath(d3.select('#waySelect').node().value);
        animEff = document.getElementById('animationEffect');
        selectEff = animEff.value;
        if (selectEff == 'linear') {
            pict
            .transition()
            .ease(d3.easeLinear) // установить в зависимости от настроек формы
            .duration(dataForm.animSpeed.value)
            .attrTween('transform', translateAlong(path.node(), dataForm));
        } else if (selectEff == 'bounce') {
            pict
            .transition()
            .ease(d3.easeBounce) // установить в зависимости от настроек формы
            .duration(dataForm.animSpeed.value)
            .attrTween('transform', translateAlong(path.node(), dataForm));
        } else if (selectEff == 'elastic') {
            pict
            .transition()
            .ease(d3.easeElastic) // установить в зависимости от настроек формы
            .duration(dataForm.animSpeed.value)
            .attrTween('transform', translateAlong(path.node(), dataForm));
        }
    }
}