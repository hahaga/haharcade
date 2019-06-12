import { shallowMount } from '@vue/test-utils';
import About from '@/views/About.vue';

describe('About.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Welcome to Vuetify';
    const wrapper = shallowMount(About, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
