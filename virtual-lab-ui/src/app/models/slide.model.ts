import { Act } from './act.model';
import { SlideType } from '../enums/slide-type.enum';
import { Option } from './option.model';
import { Topic } from './topic.model';

export class Slide {
  type: SlideType;
  title: string;
  acts: Act[];
  options: Option[];
  topic: Topic;
}