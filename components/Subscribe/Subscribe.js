import Link from 'next/link'
import { useState } from 'react';

function SubscribeNew() {

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
      })
    
      const [inputs, setInputs] = useState({
        email: ''
      })
    
      const handleResponse = (status, msg) => {
        if (status === 200) {
          setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg }
          })
          setInputs({
            email: '',
          })
        } else {
          setStatus({
            info: { error: true, msg: msg }
          })
        }
      }
    
      const handleOnChange = e => {
        e.persist()
        setInputs(prev => ({
          ...prev,
          [e.target.id]: e.target.value
        }))
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        })
      }
    
      const handleOnSubmit = async e => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        const res = await fetch('/api/subscribe_new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputs)
        })
        const text = await res.text()
        handleResponse(res.status, text)
      }

    return (
        <section>
        <div className="bg-mongoose-400">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="lg:w-auto lg:flex-1">
                    <h2 className="text-3xl text-almond-900 sm:text-6xl font-maldives" id="newsletter-headline">
                        Sign up for our Newsletter
                    </h2>
                    <p className="mt-3 max-w-xl text-lg leading-6 text-mongoose-900">
                    Stay up to date with the latest news from us on new products, deals, tips and more.
                    </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                <form onSubmit={handleOnSubmit} className="sm:flex">
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input id="email" name="email" type="email" value={inputs.email} onChange={handleOnChange} placeholder="you@awesome.com" className="w-full px-5 py-3 border border-transparent placeholder-almond-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-rose-bud-500 focus:ring-white focus:border-white sm:max-w-xs rounded-md"/>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button type="submit" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-rose-bud-500 bg-almond-300 hover:bg-almond-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                    {!status.submitting
                        ? !status.submitted
                            ? '✨ Subscribe 💌'
                            : 'Subscribed'
                        : 'Subscribing...'}
                    </button>
                    </div>
                </form>
                <div>
                {status.info.error && (
                    <div>Error: {status.info.msg}</div>
                )}

                {!status.info.error && status.info.msg && (
                    <div className="rounded-md bg-rose-bud-50 p-4 mt-2">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg class="h-5 w-5 text-rose-bud-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-rose-bud-500">
                                    {status.info.msg}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                </div>
                <p className="mt-3 text-sm text-mongoose-900">
                We care about the protection of your data. Read our <Link href="/termsconditions"><a className="text-mongoose-700 font-medium underline hover:text-mongoose-900">Terms &amp; Conditions.</a></Link>
                </p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default SubscribeNew;