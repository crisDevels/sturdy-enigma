import { Banner, Layout, Page, SettingToggle, TextStyle } from '@shopify/polaris';
import React, { useState } from 'react';
import { useAxios } from '../hooks/useAxios';
import { useGetFetch } from '../hooks/useGetFetch';

function Active() {
  const [axios] = useAxios();
  const [date, setDate] = useState(null)
  const [showBanner, setShowBanner] = useState(false)
  const [activeForm, setActiveForm] = useState(false)
  const { loading, error, data } = useGetFetch('https://99a0-186-28-41-252.ngrok.io/script_tag')

  if (loading) return '...';

  const contentCTA = activeForm ? 'Uninstall' : 'Install'
  const textStatus = activeForm ? 'Installed' : 'Uninstalled'
  
  const handleToggle = async () => {
    if (!activeForm) {
      const request = await axios({
        method: 'post',
        url: 'https://99a0-186-28-41-252.ngrok.io/script_tag'
      })
      /* const request = await axios.post('https://1488-190-146-238-178.ngrok.io/script_tag', {}, config) */
      console.log(request.data);
    }

    setDate(new Date())
    setActiveForm(activeForm => !activeForm)
    setShowBanner(true)
  }


  return (
    <Page
      title='Active form'
    >
      <Layout.Section>
        {showBanner
          ? <Banner
              title={`Form ${textStatus.toLowerCase()}`}
              status='success'
              onDismiss={() => setShowBanner(false)}
            >
              <p>This form was {textStatus.toLowerCase()} {date ? date.toUTCString() : ''}.</p>
            </Banner>
          : (null)
        }
      </Layout.Section>
      <Layout.AnnotatedSection
        title={`Form installed`}
        description='Verify if your banner was installed'
      >
        <SettingToggle
          action={{
            content: contentCTA,
            onAction: handleToggle,
          }}
          enabled={activeForm}
        >
          This form is <TextStyle variation="strong">{textStatus}</TextStyle>.
        </SettingToggle>

      </Layout.AnnotatedSection>
    </Page>
  );
}

export default Active;