import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('should render correctly with msg prop', () => {
    const wrapper = shallowMount(HelloWorld, {
      props: {
        msg: 'Hello World!',
      },
    });

    expect(wrapper.props().msg).toBe('Hello World!');
  });
});
