import { rgba } from 'polished'
import { StatusEnum, ThemeEnum } from '../enums'


export const backgroundColors: Record<StatusEnum, string> = {
    [StatusEnum.PRIMARY]: '#525ce5',
    [StatusEnum.SUCCESS]: '#34c38f',
    [StatusEnum.INFO]: '#50a5f1',
    [StatusEnum.WARNING]: '#f1b44c',
    [StatusEnum.DANGER]: '#f46a6a',
    [StatusEnum.SECONDARY]: '#74788d'
}

export const themeColors: Record<ThemeEnum, string> = {
    [ThemeEnum.LIGHT]: "#e9e9ef",
    [ThemeEnum.DARK]: '#2c302e'
}

export const baseColors: Record<string, string> = {
    black: "#000000",
    current: 'currentColor',
    inherit: 'inherit',
    transparent: 'transparent',
    white: "#ffffff",
};

export const backgroundGradient: Record<string, string> = {
    gradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))'
}