import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    fontFamily: "Poppins, sans-serif",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "48px",
    alignItems: "center",
    letterSpacing: "1px",
    color: "#121C33",
    marginBottom: "24px",
  },
  root: {
    flexGrow: 1,
  },
  container: {
    position: "relative",
  },
  tabsNav: {
    backgroundColor: "transparent",
    boxShadow: "unset",
  },
  tabs: {
    backgroundColor: "transparent",
    "&:selected": {
      borderBottom: "2px solid white",
    },
  },

  tab: {
    border: "none",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    fontSize: "16px",
    textTransform: "uppercase",
    borderRadius: "8px",
    color: "#121c33",
    opacity: "0.6",
    "&:hover": {
      backgroundColor: "rgba(18, 28, 51, 0.05)",
      color: "#121c33",
    },
    "&$selected": {
      backgroundColor: "rgba(18, 28, 51, 0.05)",
      color: "#121c33",
    },
  },
  planetCard: {
    backgroundColor: "#fff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "16px",
  },
  planetCardBtn: {
    padding: "0px",
    width: "100%",
    fontFamily: "poppins, sans-serif",
    display: "block",
    textTransform: "revert",
  },
  planetCardImgContainer: {
    display: "flex",
    justifyContent: "center",
  },
  planetCardImgContainerTwo: {
    height: "150px",
    overflow: "hidden",
  },
  planetCardImgTwo: {
    width: "100%",
    display: "block",
  },
  planetCardImg: {
    display: "block",
    textAlign: "center",
    width: "100%",
  },
  planetCardHeading: {
    fontFamily: "poppins, sans-serif",
    fontWeight: "600",
    fontSize: "16px",
    color: "#121c33",
  },
  planetCardText: {
    fontFamily: "poppins, sans-serif",
    fontWeight: "normal",
    fontSize: "12px",
    color: "#121c33",
    opacity: "0.6",
  },
  open: {
    display: "block",
  },
  close: {
    display: "none",
  },
  sideCard: {
    position: "fixed",
    top: "0%",
    right: "-2%",
    width: "408px",
    height: "100vh",
    padding: "28px",
    backgroundColor: "#fff",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    borderRadius: "32px",
    zIndex: "2",
  },
  sideCardCloseBtnContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  sideCardCloseBtn: {
    width: "40px",
    height: "40px",
    fontSize: "32px",
    backgroundColor: "rgba(18, 28, 51, 0.05)",
    borderRadius: "8px",
    color: "#121c33",
  },
  sideContentHeading: {
    fontFamily: "poppins, sans-serif",
    fontWeight: "800",
    fontSize: "32px",
    color: "#121c33",
    marginBottom: "8px",
  },
  sideContentDesc: {
    fontFamily: "poppins, sans-serif",
    fontWeight: "normal",
    fontSize: "16px",
    color: "#121c33",
    opacity: "0.6",
    marginBottom: "16px",
  },
  sideContentStats: {
    fontFamily: "poppins, sans-serif",
    fontWeight: "normal",
    fontSize: "16px",
    color: "#121c33",
  },
  sideContentValue: {
    fontFamily: "poppins, sans-serif",
    fontWeight: "600",
    fontSize: "16px",
    color: "#121c33",
    marginBottom: "24px",
  },
  sideContentSubHeading: {
    fontFamily: "poppins, sans-serif",
    fontWeight: "600",
    fontSize: "16px",
    color: "#121c33",
    opacity: "0.6",
    textTransform: "uppercase",
    marginBottom: "16px",
  },
  sideCardScroll: {
    marginTop: "30px",
    height: "200px",
    overflowY: "scroll",
    overflowX: "hidden",
  },
  sideCardScrollImgContainer: {
    width: "72px",
    height: "75px",
    overflow: "hidden",
    padding: "0px",
  },
  sideCardScrollImg: {
    width: "100%",
    borderRadius: "8px",
    verticalAlign: "middle",
  },
  sideCardScrollHeading: {
    fontFamily: "poppins, sans-serif",
    fontWeight: "600",
    fontSize: "16px",
    color: "#121c33",
    marginLeft: "10px",
  },
  sideCardScrollText: {
    fontFamily: "poppins, sans-serif",
    fontWeight: "normal",
    fontSize: "12px",
    color: "#121c33",
    opacity: "0.6",
    marginLeft: "10px",
  },
  modalBtn: {
    position: "fixed",
    bottom: "20%",
    left: "80%",
    background: "#121c33",
    color: "#fff",
    "&:hover": {
      color: "#121c33",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "60%",
    backgroundColor: "#fff",
    borderRadius: "32px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    padding: "30px 22px",
  },
  planetModalHeading: {
    width: "100%",
    fontFamily: "poppins, sans-serif",
    fontWeight: "900",
    fontSize: "48px",
    letterSpacing: "1px",
    color: "#121c33",
  },
  planetModalCancelBtn: {
    color: "#121c33",
  },
  planetModalSubmitlBtn: {
    background: "#121c33",
    color: "#fff",
    textTransform: "uppercase",
    "&:hover": {
      color: "#121c33",
    },
  },
  MuiInputUnderline: {
    "&:before": {
      content: "",
    },
  },
  input: {
    border: "0px",
    borderBottom: "1px solid white",
    borderRadius: "8px",
    margin: "8px 0px",
    backgroundColor: "#F5F5F5",
    "&:before": {
      content: "",
    },
  },
  inputImage: {
    border: "0px",
    borderRadius: "8px",
    padding: "20px 20px",
    backgroundColor: "none",
  },
  inputContainer: {
    marginBottom: "15px",
    minWidth: "100%",
    // maxWidth: 300,
  },
  loader: {
    backgroundColor: "#fff",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
    borderRadius: "32px",
    height: "240px",
    display: "flex",
    justifyContent: "center",
  },
}));

export default useStyles;
