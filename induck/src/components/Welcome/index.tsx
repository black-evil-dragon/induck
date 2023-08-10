import React from 'react'
import { useNavigate } from 'react-router-dom'


function Welcome() {
	const logoRefPrev = React.useRef<HTMLDivElement>(null)
	const componentRef = React.useRef<HTMLDivElement>(null)
	const contentRef = React.useRef<HTMLDivElement>(null)
	//const helpLabelRef = React.useRef<HTMLDivElement>(null)

	const [isAnim, setAnim] = React.useState(true)
	const [isClicked, setClick] = React.useState(false)

	const navigate = useNavigate()


	const animationHandle = () => {
		if (!isClicked) {
			setClick(true)
			contentRef.current?.classList.add('prev-in-animation')
			logoRefPrev.current?.classList.add('prev-in-animation')

			logoRefPrev.current!.style.transform = `translate(0, -${componentRef.current!.offsetHeight * 0.4}px)`
			setTimeout(() => {
				setAnim(false)
			}, 5000)
		}
	}


	return (
		<>
			{isAnim ?
				<div className='welcome' onClick={animationHandle} ref={componentRef}>
					<div className="welcome__content prev" ref={contentRef}>
						<div className="welcome__appName prev" ref={logoRefPrev}>
							induck
						</div>

					</div>
					<div className="help-label">
						Нажмите, чтобы начать
					</div>
				</div>
				:
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
							<button onClick={() => navigate('/signup')}>Зарегистрироваться</button>
						</div>
						<div className="welcome__link" onClick={() => navigate('/signup')}>
							Войти в аккаунт
						</div>

					</div>
				</div>
			}
		</>
	)
}

export default Welcome