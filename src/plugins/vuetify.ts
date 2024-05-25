// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const customColors = {
    colors:{
        'primary': '#e20272',
        'primaryLight': '#f05a97',
        'primaryDark': '#b3025a',
        'secondary': '#98ca45',
        'secondaryDark': '#1fa358',
        'textPrimary': '#43454D',
        'success': '#3DC38B',
        'surface': '#F7F7F7',
        'surfaceSecondary': '#D6D6D6',
        'background': '#E7E7E7',
        'error': '#FF765A',
        'danger': '#E20101',
        'warning': '#FFCC49'
    }
}

export const vuetify = createVuetify({
    components,
    directives,
    theme:{
        defaultTheme: 'customColors',
        themes:{
            customColors,
        }
    }
})