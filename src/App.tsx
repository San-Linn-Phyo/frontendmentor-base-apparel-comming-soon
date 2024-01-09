import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useMediaQuery } from 'react-responsive'
import * as z from 'zod'

import RollableHeading from './components/RollableHeading'

const formSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Please provide a valid email'),
})

const App = () => {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) })
  const imgContainerRef = useRef<HTMLDivElement>(null)

  const onSubmit = async () => {}

  return (
    <main className="bg-gradient-1">
      <div
        className={
          isLargeScreen
            ? 'h-screen grid grid-rows-[auto_1fr] bg-pattern'
            : 'max-w-lg mx-auto'
        }
      >
        <header className="p-8 lg:ps-[15%] lg:pt-[4%]">
          <img src="/images/logo.svg" alt="A circle with Base Apparel text" />
        </header>

        <div className="lg:flex lg:flex-row-reverse">
          <div
            ref={imgContainerRef}
            className="bg-slate-800 min-h-40 lg:w-[40%]"
          >
            <LazyLoadImage
              src={
                isLargeScreen
                  ? '/images/hero-desktop.jpg'
                  : '/images/hero-mobile.jpg'
              }
              placeholderSrc={
                isLargeScreen
                  ? '/images/shrink/hero-desktop.jpg'
                  : '/images/shrink/hero-mobile.jpg'
              }
              alt="A girl is standing in front of a plant"
              wrapperClassName="w-full h-inherit grid"
              onLoad={() => {
                if (imgContainerRef.current) {
                  imgContainerRef.current.classList.remove('bg-slate-800')
                }
              }}
              className={classNames(
                'object-cover',
                isLargeScreen
                  ? 'h-full w-[40%] absolute top-0 right-0 bottom-0'
                  : 'w-full'
              )}
            />
          </div>

          <div className="py-14 px-10 text-center lg:w-[60%] lg:self-center lg:justify-self-center lg:px-[15%] lg:mt-[-4%] lg:text-start">
            <RollableHeading isLargeScreen={isLargeScreen} />

            <p className="text-desaturated-red mb-6">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative">
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Email Address"
                  className={classNames(
                    'py-4 ps-8 rounded-full w-full border border-desaturated-red focus-visible:outline-soft-red text-dark-grayish-red',
                    errors.email ? 'pe-36' : 'pe-28'
                  )}
                />

                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full bg-slate-300 px-10 rounded-full bg-gradient-2 shadow-2xl hover:opacity-90"
                >
                  <span>
                    <img src="/images/icon-arrow.svg" alt="Arrow icon" />
                  </span>
                  <span className="sr-only">submit</span>
                </button>

                {errors?.email ? (
                  <span className="absolute top-1/2 -translate-y-1/2 right-28 -me-2">
                    <img src="/images/icon-error.svg" alt="Error icon" />
                  </span>
                ) : null}
              </div>

              {errors?.email ? (
                <span className="text-soft-red block mt-2 ps-8 text-start">
                  {errors.email.message as string}
                </span>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
