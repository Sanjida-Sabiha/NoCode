/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding:'18px',
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1440px",
      },
    },
    extend: {
      fontFamily: {
        "Graphik": ["Graphik", "sans-serif"],
        'inter':['Inter', 'sans-serif'],
      },
      fontSize: {
        '2.5xl':'22px',
        '3xl': '24px',
        '3.5xl': '26px',
        '28xl':'28px',
        '4xl': '30px',
        '4.5xl':'34px',
        '36xl':'36px',
        '5xl':'40px',
        '38xl':'38px',
        '5.5xl':'44px',
        '6xl':'50px',
        '6.5xl':'58px',
        '60xl':'60px',
        '7xl': '64px',
        '8xl':'72px',
        '9xl': '88px',
      },
      lineHeight: {
        '8': '30px',
        '10':'32px',
        '11':'38px',
        '12':'40px',
        '13':'44px',
        '14':'50px',
        '15':'54px',
        '18':'60px',
        '19':'68px',
        '20':'78px',
        '21':'96px',
      },
      spacing:{
        '333':'333px',
        '371':'371px',
        '453':'453px',
        '492':'492px',
        '517':'517px',
        '617':'617px',
        '620': '620px',
        '700':'700px',
        '713':'713px',
        '800':'800px',
        '1026':'1026px',
        '1085':'1085px',
        '1186':'1186px',
        '1356':'1356px'
      },
      borderRadius:{
        '12px':'12px',
        '32px':'32px'
      },
      colors:{
        mainBg:'#070127',
        primaryColor: '#DDDFEE',
        secondaryColor: '#9D9DBB',
        footer:'#654AFE',
        social:'#BABABA',
        borderLight:'#fff3'
        },
      backgroundImage: {
        'bgBanner': "url('/assets/img/homePage/banner-line.svg')",
        'bgAbstract':"url('/assets/img/abstract.svg')",
        'bgAbstract2':"url('/assets/img/abstract-2.svg')",
        'bghead':'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%),linear-gradient(135.76deg, #654AFD 21.86%, #E74CF4 100%)',
        'bgTextGradient':"background: linear-gradient(90deg, #654AFD 0%, #E74CF4 112.33%)",
        'border': 'linear-gradient(277.26deg, rgba(255, 255, 255, 0.3) -3.36%, rgba(255, 255, 255, 0.1) 100%)',
        'headerBorder':'linear-gradient(90deg, rgba(101, 74, 253, 0.1) 0%, rgba(231, 76, 244, 0.1) 112.33%);',
        'btnBg':'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%)',
        'btn':'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%);',
        'cardBg':'linear-gradient(200.07deg, rgba(255, 255, 255, 0.02) 36.72%, rgba(255, 255, 255, 0.15) 189.96%)',
        'sliderBg':'linear-gradient(90deg, #08012B 0%, rgba(8, 1, 43, 0) 100%)',

      },
      animation: {
        "loop-scroll": "loop-scroll 40s linear infinite",
        "loop-scroll2": "loop-scroll2 40s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "loop-scroll2": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          background: 'linear-gradient(90deg, #654AFD 0%, #E74CF4 112.33%)',
          '-webkit-text-fill-color': 'transparent',
          '-webkit-background-clip': 'text',
        },
        '.header-gradient':{
          borderBottom: '0.5px solid',
          'border-image-slice': '1',
          'border-image-source': 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.476071) 52.69%, rgba(255, 255, 255, 0) 100%)'
        },
        '.border-gradient-1': {
          border: '1px solid',
          'border-image-slice': '1',
          'border-radius': '12px',
        },
        '.border-gradient-2': {
          position: 'relative',
          borderRadius: '40px',
          overflow: 'hidden', /* Ensure the content is clipped by the border radius */
        },
        '.border-gradient-2::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          borderRadius: 'inherit',
          padding: '1px', /* Adjust the border width */
          background: 'linear-gradient(90deg, rgba(102, 74, 254, 0.4) 0%, rgba(215, 76, 245, 0.4) 100%)',
          webkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          webkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        },
        '.border-gradient-3': {
          position: 'relative',
          borderRadius: '12px', /* Increased to allow for space */
          backgroundColor: 'transparent',
          zIndex: '1',
        },
        '.border-gradient-3::before': {
          content: '""',
          position: 'absolute',
          top: '0', /* Set to 0 to match the new wrapper size */
          left: '0', /* Set to 0 to match the new wrapper size */
          right: '0', /* Set to 0 to match the new wrapper size */
          bottom: '0', /* Set to 0 to match the new wrapper size */
          borderRadius: 'inherit',
          padding: '4px', /* Space between border and outline */
          background: 'linear-gradient(97.53deg, rgba(102, 74, 254, 0.6) 0.97%, rgba(215, 76, 245, 0.6) 96.2%)', /* Adjust gradient as needed */
          zIndex: '-1',
          pointerEvents: 'none', /* Ensure the pseudo-element doesn't interfere with interactions */
          boxSizing: 'border-box',
        },
        '.border-gradient-4': {
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden', /* Ensure the content is clipped by the border radius */
        },
        '.border-gradient-4::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          borderRadius: 'inherit',
          padding: '1px', /* Adjust the border width */
          background: 'linear-gradient(97.53deg, rgba(102, 74, 254, 0.6) 0.97%, rgba(215, 76, 245, 0.6) 96.2%)',
          webkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          webkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        },
        '.border-gradient-5': {
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden', /* Ensure the content is clipped by the border radius */
        },
        '.border-gradient-5::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          borderRadius: 'inherit',
          padding: '1px', /* Adjust the border width */
          background: 'linear-gradient(281.51deg, rgba(102, 74, 254, 0.3) 0%, rgba(215, 76, 245, 0.3) 97.48%)',
          webkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          webkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        },
        '.border-gradient-6': {
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden', /* Ensure the content is clipped by the border radius */
        },
        '.border-gradient-6::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          borderRadius: 'inherit',
          padding: '1px',
          background: 'linear-gradient(97.53deg, rgba(102, 74, 254, 0.1) 0.97%, rgba(215, 76, 245, 0.1) 96.2%)',
          webkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          webkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        },
        '.border-gradient-7': {
          position: 'relative',
          borderRadius: '32px',
        },
        '.border-gradient-7::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          borderRadius: '32px',
          padding: '1px', /* Adjust the border width */
          background: 'linear-gradient(277.26deg, rgba(255, 255, 255, 0.3) -3.36%, rgba(255, 255, 255, 0.1) 100%)',
          webkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          webkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        },
      })
    },
  ],
}

