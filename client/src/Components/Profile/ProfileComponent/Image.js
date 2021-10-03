import { Button, message, Upload } from "antd";

const ProfileImg = () => {

    const props = {
        beforeUpload: file => {
            if (file.type !== 'image/png') {
                message.error(`${file.name} is not a png file`);
            }
            return file.type === 'image/png' ? true : Upload.LIST_IGNORE;
        },
        onChange: info => {
            console.log(info.fileList);
        },
    };

    return (
        <div className="top_img">
            <img style={{ width: "250px", height: "250px" }} className="profile_img" src="https://picsum.photos/id/237/200/300" alt="" />
            <div className="upload_img">
                <Upload {...props}>
                    <Button size="large" className="upload_button" ghost={true} style={{ border: "0px" }}  >Change Image</Button>
                </Upload>
            </div>
        </div>
    );
}

export default ProfileImg;