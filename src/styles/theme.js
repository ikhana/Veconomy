const theme = {
    colors: {
      primary: '#C3B091', // Testicle-like Khaki for primary actions
      secondary: '#1E90FF', // DodgerBlue for secondary actions
      background: '#F0E68C', // Khaki for background
      text: '#000000', // Black for text
      subtitle: '#1E90FF', // DodgerBlue for subtitles
      button: {
        background: '#C3B091', // Testicle-like Khaki for button background
        text: '#FFFFFF', // White for button text
        hover: '#A9A9A9', // DarkGray for button hover
      },
      gradient: 'linear-gradient(45deg, #C3B091, #1E90FF)', // Khaki to DodgerBlue gradient
      border: '#1E90FF', // DodgerBlue for borders
      shadow: 'rgba(0, 0, 0, 0.25)', // Black shadow with transparency
    },
    spacing: {
      xsmall: '4px',
      small: '8px',
      medium: '16px',
      large: '24px',
      xlarge: '32px',
      xxlarge: '40px',
    },
    fonts: {
      main: "'Comic Sans MS', cursive, sans-serif", // Comic Sans for humor
      size: {
        xsmall: '14px',
        small: '16px',
        medium: '20px',
        large: '28px',
        xlarge: '36px',
        xxlarge: '48px',
      },
      weight: {
        light: '300',
        normal: '500',
        bold: '700',
        bolder: '900',
      },
    },
    border: {
      radius: '16px', // Larger radius for humorous, rounded edges
      style: 'dotted', // Dotted border style for a fun look
      width: '2px', // Slightly thicker border width
    },
    buttons: {
      primary: {
        background: '#C3B091', // Testicle-like Khaki background
        color: '#FFFFFF', // White text
        padding: '12px 24px',
        border: 'none',
        borderRadius: '16px',
        fontSize: '20px',
        cursor: 'pointer',
        hover: {
          background: '#A9A9A9', // DarkGray hover background
        },
      },
      secondary: {
        background: '#1E90FF', // DodgerBlue background
        color: '#FFFFFF', // White text
        padding: '10px 20px',
        border: '2px dotted #C3B091', // Khaki dotted border
        borderRadius: '14px',
        fontSize: '18px',
        cursor: 'pointer',
        hover: {
          background: '#4682B4', // SteelBlue hover background
        },
      },
    },
    cards: {
      background: '#FFFFFF', // White background for cards
      border: '2px dotted #C3B091', // Khaki border
      borderRadius: '16px',
      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
      padding: '16px',
      margin: '16px 0',
    },
    alerts: {
      success: {
        background: '#32CD32', // LimeGreen background for success
        color: '#FFFFFF', // White text
        border: 'none',
        borderRadius: '12px',
        padding: '10px',
        fontSize: '16px',
      },
      error: {
        background: '#FF6347', // Tomato background for error
        color: '#FFFFFF', // White text
        border: 'none',
        borderRadius: '12px',
        padding: '10px',
        fontSize: '16px',
      },
      warning: {
        background: '#FFD700', // Gold background for warning
        color: '#000000', // Black text
        border: 'none',
        borderRadius: '12px',
        padding: '10px',
        fontSize: '16px',
      },
    },
    forms: {
      input: {
        background: '#FFFFFF', // White background for inputs
        border: '2px dotted #C3B091', // Khaki dotted border
        borderRadius: '12px',
        padding: '10px',
        fontSize: '16px',
        color: '#000000', // Black text
        margin: '8px 0',
      },
      label: {
        color: '#C3B091', // Khaki for labels
        fontSize: '14px',
        fontWeight: 'bold',
      },
      textarea: {
        background: '#FFFFFF', // White background for textarea
        border: '2px dotted #C3B091', // Khaki dotted border
        borderRadius: '12px',
        padding: '10px',
        fontSize: '16px',
        color: '#000000', // Black text
        margin: '8px 0',
      },
    },
    typography: {
      headings: {
        h1: {
          fontSize: '48px',
          fontWeight: 'bolder',
          color: '#C3B091', // Khaki for headings
        },
        h2: {
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#C3B091', // Khaki for headings
        },
        h3: {
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#C3B091', // Khaki for headings
        },
      },
      paragraph: {
        fontSize: '20px',
        fontWeight: '500',
        color: '#000000', // Black for paragraphs
        lineHeight: '1.5',
        margin: '8px 0',
      },
      link: {
        color: '#1E90FF', // DodgerBlue for links
        textDecoration: 'underline',
        hover: {
          color: '#4682B4', // SteelBlue for link hover
        },
      },
    },
    icons: {
      size: '24px',
      color: '#1E90FF', // DodgerBlue for icons
      hover: {
        color: '#000000', // Black for icon hover
      },
    },
    animations: {
      bounce: `
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-15px);
          }
        }
      `,
      shake: `
        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          10%, 30%, 50%, 70%, 90% {
            transform: translateX(-10px);
          }
          20%, 40%, 60%, 80% {
            transform: translateX(10px);
          }
        }
      `,
    },
    shadows: {
      light: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      medium: '0px 6px 12px rgba(0, 0, 0, 0.2)',
      dark: '0px 8px 16px rgba(0, 0, 0, 0.3)',
    },
    badges: {
      primary: {
        background: '#C3B091',
        color: '#FFFFFF',
        borderRadius: '12px',
        padding: '4px 8px',
        fontSize: '12px',
      },
      secondary: {
        background: '#1E90FF',
        color: '#FFFFFF',
        borderRadius: '12px',
        padding: '4px 8px',
        fontSize: '12px',
      },
    },
    tables: {
      header: {
        background: '#C3B091',
        color: '#FFFFFF',
        fontSize: '16px',
        fontWeight: 'bold',
      },
      row: {
        background: '#FFFFFF',
        color: '#000000',
        fontSize: '14px',
      },
      border: '2px dotted #1E90FF',
      hover: {
        background: '#F0E68C',
        color: '#000000',
      },
    },
    tooltips: {
      background: '#000000',
      color: '#FFFFFF',
      padding: '8px',
      borderRadius: '12px',
      fontSize: '12px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    modals: {
      background: '#FFFFFF',
      color: '#000000',
      padding: '24px',
      borderRadius: '16px',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
    },
    navigation: {
      background: '#C3B091',
      color: '#FFFFFF',
      padding: '16px',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: 'bold',
      hover: {
        background: '#1E90FF',
        color: '#FFFFFF',
      },
    },
    footers: {
      background: '#000000',
      color: '#FFFFFF',
      padding: '16px',
      fontSize: '14px',
      borderRadius: '12px',
      link: {
        color: '#1E90FF',
        textDecoration: 'underline',
        hover: {
          color: '#C3B091',
        },
      },
    },
    accordions: {
      header: {
        background: '#C3B091',
        color: '#FFFFFF',
        padding: '12px',
        fontSize: '18px',
        fontWeight: 'bold',
        borderRadius: '12px 12px 0 0',
      },
      content: {
        background: '#FFFFFF',
        color: '#000000',
        padding: '12px',
        fontSize: '14px',
        borderRadius: '0 0 12px 12px',
        border: '2px dotted #1E90FF',
      },
    },
  };
  
  export default theme;
  