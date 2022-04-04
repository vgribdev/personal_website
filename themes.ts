import { DefaultTheme } from 'styled-components'

const blueMonday: DefaultTheme = {
    palette: {
        primary: {
            contrastText: '#f7f7f7',
            main: '#4267B2'
        }
    }
}

const classicTuesday: DefaultTheme = {
    palette: {
        primary: {
            contrastText: '#fff',
            main: '#F47E52'
        }
    }
}

const officeWednesday: DefaultTheme = {
    palette: {
        primary: {
            contrastText: '#fff',
            main: '#152825'
        }
    }
}

const FullScheduledThursday: DefaultTheme = {
    palette: {
        primary: {
            main: '#FFF',
            contrastText: '#a63446'
        }
    }
}

const partyFriday: DefaultTheme = {
    palette: {
        primary: {
            main: '#FFF',
            contrastText: '#a63446'
        }
    }
}

const offlineSaturday: DefaultTheme = {
    palette: {
        primary: {
            main: '#FFF',
            contrastText: '#a63446'
        }
    }
}

const restSunday: DefaultTheme = {
    palette: {
        primary: {
            contrastText: '#fff',
            main: '#1a2029'
        }
    }
}
// getDay() Sunday = 0, Monday = 1, ... (See below):
export const dailyThemes = [
    restSunday,
    blueMonday,
    classicTuesday,
    officeWednesday,
    FullScheduledThursday,
    partyFriday,
    offlineSaturday
]
