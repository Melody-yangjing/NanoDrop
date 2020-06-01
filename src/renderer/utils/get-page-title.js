import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Nanodrop One'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
