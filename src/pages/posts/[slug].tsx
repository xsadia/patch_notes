import { Header } from "components/Header";
import Head from 'next/head';
import { PostBody } from '../../styles/pages/Posts';

export default function Post() {
  return (
    <>
      <Head>
        <title>
          Patch notes
        </title>
      </Head>
      <Header />
      <PostBody>
        <h1>Patch notes 1</h1>
        <h4>22 de julho de 2021</h4>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla semper, viverra magna quis, pretium magna. Duis felis nisi, facilisis ut congue a, sagittis a turpis. In efficitur eleifend risus, ac pulvinar nibh ullamcorper a. Duis vehicula vitae sapien eget facilisis. Quisque at facilisis purus. Phasellus nec efficitur nisl. Phasellus hendrerit lectus augue, tincidunt elementum nisi faucibus in. Aenean molestie nulla a lacus aliquam, sit amet accumsan massa semper. Vestibulum scelerisque, sem commodo iaculis auctor, urna tellus laoreet odio, non vulputate dolor elit et neque. Phasellus mollis varius feugiat. Morbi maximus id est eget eleifend. Pellentesque maximus arcu non leo rutrum, et lobortis eros rutrum. Nam eget nunc iaculis, imperdiet augue gravida, auctor ligula. Nunc iaculis, quam vel finibus vehicula, neque lacus vehicula augue, in laoreet est lorem eget orci. Cras et nulla purus.
          Nunc vel condimentum turpis, ac hendrerit dui. Ut ex metus, aliquam non volutpat sit amet, porttitor quis nisi. Ut pretium mattis fringilla. Etiam quam odio, ullamcorper id pellentesque eget, dictum vel erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eu diam bibendum, tempus est vel, lobortis nisl. Aenean cursus non lacus dignissim dictum. Phasellus commodo nulla nunc, ac scelerisque tortor ultrices eu. Duis quis leo in diam iaculis malesuada sit amet aliquet turpis. Nunc nibh tortor, iaculis et risus eu, fermentum venenatis turpis.
          Mauris vitae libero in est convallis imperdiet. Vivamus sit amet ante a arcu tincidunt sagittis. Sed vehicula, eros at molestie finibus, nisi quam porta enim, at venenatis ante diam semper metus. Sed sed purus justo. Donec vitae turpis mi. Suspendisse ac orci et nisi posuere pellentesque. Duis at lorem non metus elementum varius. Donec ut dolor nec libero dignissim viverra. Duis id arcu eu nibh imperdiet feugiat. Nulla imperdiet eleifend ligula in posuere. Nam non sollicitudin mi.
          Donec sed enim ornare, imperdiet lacus at, semper eros. Integer sapien mauris, consectetur vitae ante non, tincidunt pellentesque augue. Sed ac eros quis erat rhoncus placerat quis nec felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam et arcu ipsum. Cras luctus nisi odio, sed vestibulum nibh luctus vitae. Integer volutpat laoreet augue nec porttitor. Praesent eget vehicula mi, at aliquet nisi. Pellentesque auctor sed felis quis consectetur. Vestibulum mattis turpis ac blandit mollis. Aliquam pulvinar nulla et orci malesuada, rhoncus ultricies nibh congue. Nam ullamcorper arcu sed metus faucibus facilisis. Nullam eu dui nulla. Cras luctus nisi risus.
          Proin et mattis ex. Aenean ut metus commodo, iaculis enim ultrices, imperdiet metus. Sed venenatis tincidunt aliquet. Quisque lobortis tellus non nisi fringilla, nec aliquam felis placerat. Donec ac lorem ut nibh fermentum malesuada venenatis non odio. Integer fringilla lectus at neque dignissim, maximus fermentum felis volutpat. Aenean mattis lorem a augue dapibus, eget condimentum mauris tempor. Aliquam sit amet odio id est fringilla euismod. Quisque ac est placerat augue imperdiet eleifend rutrum sit amet sem. Phasellus mollis ex eget auctor tempor. Proin imperdiet mi et ex posuere, sit amet mattis augue tincidunt. Etiam porttitor scelerisque libero id viverra. Donec accumsan fringilla augue nec feugiat. Cras tristique hendrerit nunc, et mollis justo tristique et. Fusce elementum condimentum nisl non vestibulum. Suspendisse ut ante leo.
        </p>
      </PostBody>
    </>
  );
}