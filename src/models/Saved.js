import { elements, renderUI } from '../views/base'

export const addNewLocation = newRecord => {
    elements.addNewRecord.textContent = newRecord.location
}
