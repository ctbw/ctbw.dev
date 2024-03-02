import * as React from 'react'

import * as types from '@/lib/types'

import { PageHead } from './PageHead'

import styles from './styles.module.css'

export const SubscriptionConfirmation: React.FC<types.PageProps> = ({
  site
}) => {
  const title = site?.name || 'Subscribe'

  return (
    <>
      <PageHead site={site} title={title} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 style={{ color: 'rgb(154, 109, 215)' }}>You are subscribed!</h1>
        </main>
      </div>
    </>
  )
}
