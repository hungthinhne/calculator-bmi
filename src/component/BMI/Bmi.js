import React, { useState } from 'react'
import "./bmi.css"

const Bmi = () => {

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmi, setBmi] = useState("");
    const [message, setMessage] = useState("");
    const [imgURL, setImgURL] = useState("")

    const calcBmi = () => {
        if (
            height == '0' || weight == '0' 
            || height == '' || weight == ''
        ){
            alert('Bạn chưa nhập hoặc nhập thiếu thông tin cơ thể')
        }     
        else {
            var bmi = (weight / (height * height))
            setBmi(bmi.toFixed(1))
        }

        if ( bmi < 18.5) {
            setMessage("Bạn rất ốm, cần chú ý ăn uống")
            setImgURL("https://github.com/fireclint/bmi-calculator-react/blob/main/src/assets/underweight.png?raw=true")
        } else if (bmi > 18.5 && bmi < 19.9) {
            setMessage("Bạn đang khá ốm")
            setImgURL("https://github.com/fireclint/bmi-calculator-react/blob/main/src/assets/underweight.png?raw=true")
        } else if (bmi > 20 && bmi < 22.9) {
            setMessage("Chỉ số cơ thể của bạn rất tốt")
            setImgURL("https://github.com/fireclint/bmi-calculator-react/blob/main/src/assets/underweight.png?raw=true")
        } else if (bmi > 23 && bmi < 24.9) {
            setMessage("Bạn đang khá mập")
            setImgURL("https://github.com/fireclint/bmi-calculator-react/blob/main/src/assets/healthy.png?raw=true")
        } else if (bmi > 25 && bmi < 29.9) {
            setMessage("Bạn đang béo phì cấp độ 1")
            setImgURL("https://github.com/fireclint/bmi-calculator-react/blob/main/src/assets/overweight.png?raw=true")
        } else if (bmi > 30 && bmi < 40) {
            setMessage("Bạn đang béo phì cấp độ 2")
            setImgURL("https://github.com/fireclint/bmi-calculator-react/blob/main/src/assets/overweight.png?raw=true")
        } else if (bmi > 40) {
            setMessage("Bạn đang béo phì cấp độ 3. Cực kỳ nguy hiểm")
            setImgURL("https://github.com/fireclint/bmi-calculator-react/blob/main/src/assets/overweight.png?raw=true")
        }

    }

    const handleReload = () => {
        window.location.reload()
    }
    return (
        <div>
            <div className="container">
                <div className="divbmi">
                    <div className="title">
                        <h1 className='title'>BMI Calculator</h1>
                    </div>
                    <div className="main">
                        <p className='mt-2'>Trọng Lượng (kg)</p>
                        <input className='inputbmi mt-2' type="text" onChange={(e) => setWeight(e.target.value)} value={weight} />
                        <p className='mt-2'>Chiều Cao (m)</p>
                        <input className='inputbmi mt-2' onChange={(e) => setHeight(e.target.value)} type="text" value={height} />
                        <div className="divbtn mt-2">
                            <button onClick={calcBmi} className='sub'>Xác Nhận</button>
                            <button className='rel' onClick={handleReload}>Reload</button>
                        </div>
                        <div className="title">
                            <h1 className='title small'>Chỉ số BMI của bạn: {bmi}</h1>
                            <p>{message}</p>
                            <div className="img-container">
                                <img src={imgURL} alt="" />
                            </div>
                        </div>         
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bmi