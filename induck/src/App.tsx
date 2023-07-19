import React from 'react';
import { Route, Routes } from 'react-router-dom'



function Welcome() {
	const logoRefPrev = React.useRef<HTMLDivElement>(null)
	const componentRef = React.useRef<HTMLDivElement>(null)
	const contentRef = React.useRef<HTMLDivElement>(null)
	const [test, setTest] = React.useState(0)

	const [isAnim, setAnim] = React.useState(true)


	const animationHandle = () => {
		contentRef.current?.classList.add('prev-in-animation')
		logoRefPrev.current?.classList.add('prev-in-animation')

		logoRefPrev.current!.style.transform = `translate(0, -${componentRef.current!.offsetHeight * 0.4}px)`
		setTimeout(() => {
			setAnim(false)
		}, 6500)
	}

	React.useEffect(() => {
		console.log(componentRef.current!.offsetHeight)
	}, [])

	return (
		<>
			{isAnim ? <div className='welcome' onClick={animationHandle} ref={componentRef}>
				<div className="welcome__content prev" ref={contentRef}>
					<div className="welcome__appName prev" ref={logoRefPrev}>
						induck
					</div>

				</div>
			</div> :
				<div className='welcome' >
					<div className="welcome__content next">
						<div className="welcome__appName next" style={{ transform: `translate(0, -${componentRef.current!.offsetHeight * 0.4}px)` }}>
							induck
						</div>

						<div className="welcome__title">
							Ты смешарик?)
						</div>
						<div className="welcome__text">
							Нет? Тогда тебе стоит зарегистрироваться! Это позволит прикрепить прогресс к логину.					</div>
						<div className="welcome__button">
							Зарегистрироваться
						</div>
						<div className="welcome__link">
							Войти в аккаунт
						</div>

					</div>
				</div>
			}
		</>
	)
}

function App() {
	const isLogin: boolean = false
	return (
		<>
			{!isLogin ? <Welcome /> : <></>}
		</>
	);
}

export default App;
