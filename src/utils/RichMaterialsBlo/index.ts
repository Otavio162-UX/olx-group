export const richMaterialsBlogEbookFormId = 'rich-materials-ebook-form'

export const goToEbookDownloadForm = () => {
  const form = document.getElementById(richMaterialsBlogEbookFormId)
  window.scrollTo({ behavior: 'smooth', top: form?.offsetTop || 0 })
}
