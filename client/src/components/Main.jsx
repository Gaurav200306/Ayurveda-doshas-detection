import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'



export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz() {
        if (inputRef.current?.value) {
            dispatch(setUserId(inputRef.current?.value))
        }
    }

    return (
        <div className='container'>
            <div className='what'>
                <div className='words'>
                    <h1>What is Ayurveda ?</h1>
                    Ayurveda is an ancient holistic healing system from India. It emphasizes balance between body, mind, and spirit for optimal health. Ayurveda categorizes individuals into three doshas: Vata (air and space), Pitta (fire and water), and Kapha (water and earth). Each person has a unique dosha constitution influencing their physical, mental, and emotional traits. Imbalances in doshas lead to illness, while Ayurvedic treatments focus on restoring balance through lifestyle adjustments, dietary changes, herbal remedies, yoga, and meditation. Understanding one's dosha (Vata, Pitta, Kapha) helps tailor personalized health practices to maintain well-being and prevent disease in Ayurvedic philosophy.
                </div>
                <div className='photo'>
                    <img src="https://cdn.pixabay.com/photo/2024/03/20/04/00/ai-generated-8644565_1280.jpg" alt="Ayurveda " srcset="" />
                </div>
            </div>
            <div className='dosha'>
            <div className='doshaImg'>
                    <img src="https://www.ayurveda-products.eu/media/wysiwyg/content/ayurveda-tipps/VPK/tridosha.jpg" alt="" />
                </div>
                <div className='doshaText'>
                    <span className='doshaheading'>What is vata?</span>
                    <br />
                    Vata is one of the three Ayurvedic doshas representing air and space elements. It governs movement, creativity, and communication in the body. Vata imbalance can lead to anxiety and digestive issues.
                    <br /> <br /><br /><span className='doshaheading'>What is pitta?</span><br />
                    Pitta is one of the three Ayurvedic doshas representing fire and water elements. It governs metabolism, digestion, and transformation in the body. Pitta imbalance can lead to irritability and inflammatory conditions.

                    <br /><br /><br /><span className='doshaheading'>What is kapha?</span><br />
                    Kapha is one of the three Ayurvedic doshas representing earth and water elements. It governs structure, stability, and lubrication in the body. Kapha imbalance can lead to lethargy and congestion-related issues.
                    </div>
                

            </div>
        

            <h1 className='title text-light'>Predict your dosha</h1>

            <ol>
                <li>You will be asked 20 questions one after another.</li>
                {/* <li>10 points is awarded for the correct answer.</li> */}
                <li>Each question has three options.</li>
                <li>You can review and change answers before the quiz finish.</li>
                <li>Your dosha will be predicted at the end of the quiz.</li>
            </ol>

            <form id="form">
                <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
            </form>

            <div className='start'>
                <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
            </div>
            <br />
            <hr />
            <footer className='footer'>
                <h3><span>&copy;</span> copyright NIT KKR</h3>
            </footer>
        </div>
    )
}
