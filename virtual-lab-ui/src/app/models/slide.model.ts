import { SlideType } from '../enums/slide-type.enum';
import { Option } from './option.model';
import { Topic } from './topic.model';
import { Paragraph } from './paragraph.model';

export class Slide {
  type: SlideType;
  title: string;
  paragraphs: Paragraph[];
  options: Option[];
  topic: Topic;
}