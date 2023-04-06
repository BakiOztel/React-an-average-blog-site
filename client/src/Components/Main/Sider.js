import { Layout, Menu } from 'antd';
import {
    UserOutlined
} from '@ant-design/icons';
const { Sider } = Layout;
const Siders = () => {

    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
        >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="11" icon={<UserOutlined />}>
                    {/* new version will be added */}
                </Menu.Item>
            </Menu>
        </Sider>
    );
}
export default Siders;