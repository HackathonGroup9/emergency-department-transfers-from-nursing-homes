import React from 'react'
import Page from "../components/page/Page";
import { Button } from 'semantic-ui-react'




export const PatientHomePage = () => {
  return (
    <Page>
        PatientHomePage
        <Button href="/avatarpage">Change in patient condition</Button>
        <Button>Abnormal Lab Test (patient is stable)</Button>
    </Page>
  )
}
