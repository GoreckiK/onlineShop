import React from 'react';
import { PageHeader } from 'antd';
import { RouteComponentProps, withRouter } from 'react-router';

const AboutComponent: React.SFC<RouteComponentProps> = ({history}) => {
    return (
        <div>
            <PageHeader title='O nas' onBack={() => history.goBack()}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis ipsum non viverra ultricies. Maecenas efficitur sem facilisis enim laoreet, in maximus ante interdum. Cras vitae lacus turpis. Donec rutrum diam pellentesque euismod aliquet. Quisque varius lacus hendrerit massa elementum sagittis. Vivamus consequat, metus id scelerisque feugiat, quam dui fermentum orci, vel commodo nisl arcu quis magna. Ut scelerisque arcu nec tellus rhoncus iaculis. Maecenas vitae molestie augue, quis faucibus felis.

Curabitur vitae mollis odio, at elementum magna. Aliquam aliquet mauris id sapien egestas, eget condimentum risus luctus. Nam eu quam at justo accumsan tristique ut eget nunc. Aliquam imperdiet mauris id maximus tempor. Vivamus eleifend, arcu sit amet ornare commodo, ligula leo efficitur elit, sed euismod est ipsum vitae urna. Donec in elementum sem, non gravida dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis iaculis sem quis sem sollicitudin, ac posuere ipsum commodo.

Nam a vulputate nisi, vel sollicitudin nulla. Duis et felis mauris. Phasellus in malesuada dolor. Etiam sit amet elit mattis odio laoreet congue. Mauris in erat augue. Proin vulputate, justo et fermentum finibus, dui orci feugiat massa, quis hendrerit massa nibh eleifend risus. Vivamus metus metus, luctus a nibh vitae, feugiat egestas tortor. Curabitur quis risus in turpis dapibus tempus.

Morbi erat lacus, bibendum eget tellus in, gravida vehicula quam. Maecenas enim enim, mattis in mollis vitae, finibus eu mi. Cras rutrum lectus tellus, sed fringilla mi pellentesque eget. Suspendisse ullamcorper tortor et risus tristique ornare. Proin posuere nisi eget laoreet ornare. Morbi posuere dictum congue. Duis luctus elit magna, in lobortis augue varius congue. Vestibulum commodo nibh orci, sed sagittis neque bibendum at. Duis sit amet suscipit dui.

Mauris venenatis dignissim diam, quis faucibus orci egestas eget. Aenean lacinia est sit amet enim sagittis rhoncus non consequat ligula. Nunc semper nibh massa, egestas posuere ligula accumsan vel. Mauris purus justo, semper et lacus eu, vehicula fringilla libero. Phasellus eu augue volutpat, tincidunt magna in, faucibus ligula. Ut ullamcorper maximus feugiat. Curabitur placerat ac odio vitae finibus. Duis a ultrices diam. Cras sed neque a elit dignissim tincidunt nec in justo. Vivamus ullamcorper varius tortor, et tincidunt enim tempor ac. Quisque nec ipsum quis dui imperdiet eleifend in quis ipsum. Sed aliquam mi efficitur ante tristique varius.</p>

        </PageHeader>
        </div>
    )
}

export default withRouter(AboutComponent);
