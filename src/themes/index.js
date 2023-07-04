import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
	styles: {
		global: () => ({
			body: {
				bg: '#F5FAFF',
			}
		})
	},
  fonts: {
    headings: `Inter, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`
  },
  "colors": {
    "button": {
      "400": "#1a88ff",
      "500": "#0056b4",
      "600": "#003e82",
      "700": "#002551",
    },   
    "brand": {
      "50": "#dcf3ff",
      "100": "#aed7ff",
      "200": "#7dbdff",
      "300": "#4aa3ff",
      "400": "#1a88ff",
      "500": "#006fe6",
      "600": "#0056b4",
      "700": "#003e82",
      "800": "#002551",
      "900": "#000d21"
    },  
    "blue": {
      "50": "#E8F2FD",
      "100": "#BEDAF9",
      "200": "#94C2F5",
      "300": "#6AAAF1",
      "400": "#4093ED",
      "500": "#167BE9",
      "600": "#1262BA",
      "700": "#0D4A8C",
      "800": "#09315D",
      "900": "#04192F"
    },
    "pink": {
      "50": "#FDE8F2",
      "100": "#F9BEDA",
      "200": "#F594C2",
      "300": "#F16AAA",
      "400": "#ED4092",
      "500": "#E9167A",
      "600": "#BA1262",
      "700": "#8C0D49",
      "800": "#5D0931",
      "900": "#2F0418"
    },
    "red": {
      "50": "#FDE8E8",
      "100": "#F9BFBE",
      "200": "#F59694",
      "300": "#F06D6A",
      "400": "#EC4441",
      "500": "#E81B17",
      "600": "#BA1612",
      "700": "#8B100E",
      "800": "#5D0B09",
      "900": "#2E0505"
    },
    "orange": {
      "50": "#FDF3E8",
      "100": "#F9DCBE",
      "200": "#F5C694",
      "300": "#F0B06A",
      "400": "#EC9A41",
      "500": "#E88417",
      "600": "#BA6912",
      "700": "#8B4F0E",
      "800": "#5D3509",
      "900": "#2E1A05"
    },
    "yellow": {
      "50": "#FEFFE5",
      "100": "#FDFFB8",
      "200": "#FCFF8A",
      "300": "#FBFF5C",
      "400": "#FBFF2E",
      "500": "#FAFF00",
      "600": "#C8CC00",
      "700": "#969900",
      "800": "#646600",
      "900": "#323300"
    },
    "green": {
      "50": "#E5FFE6",
      "100": "#B8FFB9",
      "200": "#8AFF8C",
      "300": "#5CFF5F",
      "400": "#2EFF32",
      "500": "#00FF05",
      "600": "#00CC04",
      "700": "#009903",
      "800": "#006602",
      "900": "#003301"
    },
    "teal": {
      "50": "#E5FFF3",
      "100": "#B8FFDC",
      "200": "#8AFFC6",
      "300": "#5CFFB0",
      "400": "#2EFF99",
      "500": "#00FF83",
      "600": "#00CC69",
      "700": "#00994F",
      "800": "#006634",
      "900": "#00331A"
    },
    "cyan": {
      "50": "#E5FFFF",
      "100": "#B8FEFF",
      "200": "#8AFDFF",
      "300": "#5CFDFF",
      "400": "#2EFCFF",
      "500": "#00FBFF",
      "600": "#00C9CC",
      "700": "#009799",
      "800": "#006466",
      "900": "#003233"
    },
    "purple": {
      "50": "#F3E8FD",
      "100": "#DCBEF9",
      "200": "#C694F5",
      "300": "#B06AF1",
      "400": "#9940ED",
      "500": "#8316E9",
      "600": "#6912BA",
      "700": "#4F0D8C",
      "800": "#34095D",
      "900": "#1A042F"
    }
  }  
});

export default theme;