/* массив точек пути будет иметь следующий вид:
  [
    {x: координата, y: координата},
    {x: координата, y: координата},
    ...
  ]
*/
// создаем массив точек, расположенных буквой "Г"
// создаем массив точек, в соответствии с моих заданием (там синусоида, y = sin(x))
function createPathZadanie() {
    const svg = d3.select("svg")
    const width = svg.attr("width")
    const height = svg.attr("height")
    
    let data = [];
    const padding = 100; // отступ слева
    
    for (let t = 0; t <= Math.PI * 5; t += 0.1) {
        data.push({
            x: padding + (t / (Math.PI * 4) * (width - 2 * padding)), // Если 4 увеличить - кривая сожмётся по горизонтали, Если уменьшить - растянется
            y: height / 2 + (height / 2 - padding) * Math.sin(t) // 1 - Центр ; 2 - Амплитуда ; 3 - Колебания
        });
    }
    
    return data;
}

// создаем массив точек, расположенных по кругу
function createPathCircle() {
    const svg = d3.select("svg")
	const width = svg.attr("width")
	const height = svg.attr("height")
    let data = [];
    // используем параметрическую форму описания круга
    // центр расположен в центре svg-элемента, а радиус равен трети высоты/ширины
    for (let t = 0 ; t <= Math.PI * 2; t += 0.1) {
        data.push(
            {x: width / 2 + width / 3 * Math.sin(t),
             y: height / 2 + height / 3 * Math.cos(t)}
        );
    }
    return data
}

const drawPath =(typePath) => {
	// создаем массив точек
	const dataPoints = (typePath == 0)? createPathZadanie() : createPathCircle();

	const line = d3.line()
		.x((d) => d.x)
		.y((d) => d.y);
    const svg = d3.select("svg")
	// создаем путь на основе массива точек	  
	const path = svg.append('path')
		.attr('d', line(dataPoints))
		.attr('stroke', 'black')
		.attr('fill', 'none');
		
	return path;
}

function translateAlong(path, dataForm) {
    const length = path.getTotalLength();
    return function() {
        return function(t) {
            const {x, y} = path.getPointAtLength(t * length);
            sx1 = +dataForm.mx.value;
            sx2 = +dataForm.mx2.value;
            sy1 = +dataForm.my.value;
            sy2 = +dataForm.my2.value;
            r1 = +dataForm.rotate.value;
            r2 = +dataForm.rotate2.value;
            const sx = sx1 + (sx2 - sx1) * t;
            const sy = sy1 + (sy2 - sy1) * t;
            const r = r1 + (r2 - r1) * t;
            return `translate(${x},${y}) scale(${sx},${sy}) rotate(${r})`;
        }
    }
}   