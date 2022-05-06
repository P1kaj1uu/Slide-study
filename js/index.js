// 获取元素
let lisImg = document.querySelectorAll('.slide li')
let indicator = document.querySelector('.indicator')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let box = document.querySelector('.box')

for (let i = 0; i < lisImg.length; i++) {
	// 根据图片张数，动态生成指示点个数
	// 创建元素
	let li = document.createElement('li')
	// 将元素追加到页面中
	indicator.appendChild(li)
	// 动态为第一个指示点添加类名
	document.querySelector('.indicator li').classList.add('active')
	
	// 当点击指示点，显示对应的图片
	indicator.children[i].addEventListener('click', function () {
		// 指示点排他思想
		document.querySelector('.indicator .active').classList.remove('active')
		this.classList.add('active')
		// 显示对应的图片
		document.querySelector('.slide .active').classList.remove('active')
		lisImg[i].classList.add('active')
		
		// 解决点击指示点后顺序乱序问题
		index = i
	})
}

// 声明一个变量，用于点击左右按钮
let index = 0

// 当点击右边按钮时
next.addEventListener('click', function () {
	index++
	index = index % lisImg.length
	// 调用封装的函数
	common()
})

// 当点击左边按钮时
prev.addEventListener('click', function () {
	index--
	index = (index + lisImg.length) % lisImg.length
	// 调用封装的函数
	common()
})

// 提取相同部分代码，封装函数
function common() {
	// 指示点排他思想
	document.querySelector('.indicator .active').classList.remove('active')
	indicator.children[index].classList.add('active')
	// 显示对应的图片
	document.querySelector('.slide .active').classList.remove('active')
	lisImg[index].classList.add('active')
}

// 开启定时器
let timer = setInterval(function () {
	// 模拟点击右边的按钮
	next.click()
}, 4000)

// 当鼠标经过大盒子时，停止定时器
box.addEventListener('mouseenter', function () {
	clearInterval(timer)
})

// 当鼠标离开大盒子时，重新开启定时器
box.addEventListener('mouseleave', function () {
	timer = setInterval(function () {
		next.click()
	}, 4000)
})
