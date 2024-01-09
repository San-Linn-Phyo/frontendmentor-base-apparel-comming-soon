import classNames from 'classnames'
import { motion } from 'framer-motion'

type Props = {
  isLargeScreen: boolean
}

type RollableText = {
  count: number
  flow: 'top-down' | 'down-top'
  text: string
  ids: string[]
}

const createRollableText = ({ count, flow, text, ids }: RollableText) => {
  return (
    <span className="relative overflow-hidden uppercase inline-block">
      {(() => {
        const results = []
        for (let i = 0; i <= count - 1; i++) {
          let initialY = i * 100
          let animateY = (i + 1 - count) * 100

          if (flow === 'top-down') {
            initialY *= -1
            animateY *= -1
          }

          results.push(
            <motion.span
              key={ids[i]}
              initial={{ y: `${initialY}%` }}
              animate={{
                y: `${animateY}%`,
                transition: {
                  duration: 0.5,
                  ease: 'easeOut',
                  type: 'tween',
                },
              }}
              className={classNames(
                'inline-block',
                i ? 'absolute top-0 left-0' : ''
              )}
            >
              {text}
            </motion.span>
          )
        }
        return results
      })()}
    </span>
  )
}

const RollableHeading = ({ isLargeScreen }: Props) => {
  return (
    <h1
      className={classNames(
        'uppercase tracking-[0.2em] font-semibold text-dark-grayish-red mb-4',
        isLargeScreen ? 'text-5xl' : 'text-4xl'
      )}
    >
      <span className="block text-soft-red font-light">
        {createRollableText({
          count: 3,
          flow: 'down-top',
          text: 'w',
          ids: ['1', '2', '3'],
        })}

        {createRollableText({
          count: 3,
          flow: 'top-down',
          text: 'e',
          ids: ['4', '5', '6'],
        })}

        {createRollableText({
          count: 3,
          flow: 'down-top',
          text: "'",
          ids: ['7', '8', '9'],
        })}

        {createRollableText({
          count: 3,
          flow: 'top-down',
          text: 'r',
          ids: ['10', '11', '12'],
        })}

        {createRollableText({
          count: 3,
          flow: 'down-top',
          text: 'e',
          ids: ['13', '14', '15'],
        })}
      </span>

      <span className="block">
        {createRollableText({
          count: 3,
          flow: 'top-down',
          text: 'c',
          ids: ['16', '17', '18'],
        })}

        {createRollableText({
          count: 3,
          flow: 'down-top',
          text: 'o',
          ids: ['19', '20', '21'],
        })}

        {createRollableText({
          count: 3,
          flow: 'top-down',
          text: 'm',
          ids: ['22', '23', '24'],
        })}

        {createRollableText({
          count: 3,
          flow: 'down-top',
          text: 'i',
          ids: ['25', '26', '27'],
        })}

        {createRollableText({
          count: 3,
          flow: 'top-down',
          text: 'n',
          ids: ['28', '29', '30'],
        })}

        {createRollableText({
          count: 3,
          flow: 'down-top',
          text: 'g',
          ids: ['31', '32', '33'],
        })}
      </span>

      <span className="block">
        {createRollableText({
          count: 3,
          flow: 'down-top',
          text: 's',
          ids: ['34', '35', '36'],
        })}

        {createRollableText({
          count: 3,
          flow: 'top-down',
          text: 'o',
          ids: ['37', '38', '39'],
        })}

        {createRollableText({
          count: 3,
          flow: 'down-top',
          text: 'o',
          ids: ['40', '41', '42'],
        })}

        {createRollableText({
          count: 3,
          flow: 'top-down',
          text: 'n',
          ids: ['43', '44', '45'],
        })}
      </span>
    </h1>
  )
}

export default RollableHeading
