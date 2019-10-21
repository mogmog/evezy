import React, { Fragment, Suspense } from 'react';
import { Icon, Layout, Menu } from 'antd';

import './BasicLayout.less';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;


/*graph ql definitions. We know we are authenticated at this point as we have redirected to a authenticated route so Auth.currentSession will
 * return an authenticated token */

const footerlinks = [

    {
        key: 'Contact Us',
        title: 'Contact Us',
        href: 'mailto:iodex@spglobal.com',
        blankTarget: false,
    },

    {
        key: 'Privacy Policy',
        title: 'Privacy Policy',
        href: 'https://www.spglobal.com/en/privacy',
        blankTarget: true,
    },

    {
        key: 'Terms and Conditions',
        title: 'Terms and Conditions',
        href: 'https://www.spglobal.com/en/terms-of-use',
        blankTarget: true,
    },

]

export default class BasicLayout extends React.Component {

  render() {

    const { children, signOut, user, history, isMobile, isAdmin, path, onChangeLanguage}  = this.props;

    return (
            <React.Fragment>

                <Layout className={'BasicLayout'} style={{ minHeight: '100vh' }} >

                    <Layout>



                        <Content style={{ margin: '0px 16px' }}>

                            <div className='pagecontainer' id='pagecontainer'>
                                {this.props.children}
                            </div>

                        </Content>

                    </Layout>
                </Layout>

            </React.Fragment>
           )
  }

}
