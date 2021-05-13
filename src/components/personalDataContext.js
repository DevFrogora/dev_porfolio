import React from 'react'

const PersonalDataContext = React.createContext()

const PersonalDataProvider = PersonalDataContext.Provider
const PersonalDataConsumer = PersonalDataContext.Consumer

export {PersonalDataProvider ,PersonalDataConsumer}
export default PersonalDataContext