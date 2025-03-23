import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, image }) {
    if (!image) return null;

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onClose} 
            contentLabel=""
            style={{
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
              content: {
                height: "6000px",
                width: "70%", 
                maxWidth: "800px", 
                top: "50%",
                left: "50%",
                right: "auto", 
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)", 
                padding: "20px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                  
  
  },
            }}
        >
            <img src={image.urls.regular} alt={image.alt_description} style={{ width: "100%", borderRadius: "10px" }} />
        </Modal>
    );
}
