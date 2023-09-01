import React from 'react'

export default function Signup() {
  return (
    <div>
        <div>
            <h1>signup</h1>
        </div>
        <div>
            <form>
                <div>
                <label htmlFor="">firstname</label>
                <input type="text" />
                </div>
                <div>
                <label htmlFor="">lastname</label>
                <input type="text" />
                </div>
                <div>
                <label htmlFor="">email</label>
                <input type="email" name="" id="" />
                </div>
                <div>
                <label htmlFor="">password</label>
                <input type="password" name="" id="" />
                </div>
                <div>
                <label htmlFor="">password confimation</label>
                <input type="password" name="" id="" />
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <p>I agree to terms and condition</p>
                </div>
                <div>
                    <button>signup</button>
                </div>
            </form>
        </div>
    </div>
  )
}
