export const formatDate = (date: string) => {
  if (date) {
    const dateTime = new Date(date)
    const day = dateTime.getDate().toString().padStart(2, '0')
    const month = (dateTime.getMonth() + 1).toString().padStart(2, '0')
    const year = dateTime.getFullYear()
    return `${day}/${month}/${year}`
  }
  return date
}

export const formatCPF = (value: string) => {
  const cleanedValue = value.replace(/\D/g, '')
  if (cleanedValue.length === 11) {
    return cleanedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }
  return cleanedValue
}

export const formatPhone = (value: string) => {
  const cleanedValue = value.replace(/\D/g, '')
  if (cleanedValue.length === 11) {
    return cleanedValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  }
  return cleanedValue
}

export const removeFormatCpf = (value: string) => value.replace(/[^\d]/g, '')
