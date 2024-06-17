

export default function UserInput({values, onChange}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial investment</label>
                    <input type="number" value={values.initialInvestment} onInput={(e)=> onChange(e.target.value,'initialInvestment')} placeholder="Enter intial investment" />
                </p>
                <p>
                    <label>Annual investment</label>
                    <input type="number"value = {values.annualInvestment} onInput={(e)=> onChange(e.target.value, 'annualInvestment')} placeholder="Enter intial investment" />
                </p>
                <p>
                    <label>Expected return</label>
                    <input type="number" value={values.expectedReturn}  onInput={(e)=> onChange(e.target.value,'expectedReturn')} placeholder="Enter intial investment" />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={values.duration} onInput={(e)=> onChange(e.target.value, 'duration')} placeholder="Enter intial investment" />
                </p>
   

            </div>
        </section>
    )
}