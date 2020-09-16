import React from 'react';
import "./style.css"

class Upload extends React.Component{
  state = {
    imageUrl: undefined,
    imageAlt: undefined,
  }

  openWidget = () => {
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'sbhandari',
        uploadPreset: 'dbs9tp38',
        sources: [
            "local",
            "camera"
        ],
        styles: {
            palette: {
                window: "#464040",
                sourceBg: "#292222",
                windowBorder: "#c7a49f",
                tabIcon: "#cc6600",
                inactiveTabIcon: "#E8D5BB",
                menuIcons: "#ebe5db",
                link: "#ffb107",
                action: "#ffcc00",
                inProgress: "#99cccc",
                complete: "#78b3b4",
                error: "#ff6666",
                textDark: "#61391D",
                textLight: "#D8CFCF"
            }
        },
      },
      (error, { event, info }) => {
        if (event === 'success') {
          this.props.logoUpload(info.secure_url)
        }
      },
    ).open();
  };

  render() {
    const { imageUrl, imageAlt } = this.state;

    return (
      <main  className="Upload">
        <section className="left-side">
          <form>
            <button type="button" className="btn widget-btn upload" onClick={this.openWidget}>Upload</button>
          </form>
        </section>
        <section className="right-side">
          {/* <p>The resulting image will be displayed here</p> */}
          {imageUrl && (
            <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
          )}
        </section>
      </main>
    );
  }
}

export default Upload;