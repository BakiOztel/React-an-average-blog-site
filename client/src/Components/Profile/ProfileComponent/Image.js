import { Button, message, Upload } from "antd";
import { useSelector } from "react-redux";
import { postProfileImgChange } from "../../../Api/postApi.js";
const ProfileImg = () => {
    const { data } = useSelector(state => state.userReducers);
    const uploadImage = (value) => {
        const { file } = value;
        console.log(value);
        let formData = new FormData();
        formData.append("avatar", file);
        try {
            postProfileImgChange(formData)
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="top_img">
            <img style={{ width: "250px", height: "250px" }} className="profile_img" src={data.profileImg ? (`http://localhost:5000/${data.profileImg}`):("https://picsum.photos/id/237/200/300")} alt="" />
            <div className="upload_img">
                {console.log(data)};
                <Upload  multiple={false} showUploadList={false} customRequest={uploadImage} >
                    <Button size="large" className="upload_button" ghost={true} style={{ border: "0px" }}  >Change Image</Button>
                </Upload>
            </div>
        </div>
    );
}

export default ProfileImg;