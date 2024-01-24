import { Expose, Type } from 'class-transformer';

import { TagRdo } from '../../tag/rdo/tag.rdo';

export class PostRdo {
  @Expose()
  public id: string;

  @Expose()
  public type: string[];

  @Expose()
  public videoTitle?: string;

  @Expose()
  public videoUrl?: string;

  @Expose()
  public textTitle?: string;

  @Expose()
  public textAnons?: string;

  @Expose()
  public text?: string;

  @Expose()
  public cite?: string;

  @Expose()
  public citeAuthor?: string;

  @Expose()
  public photo?: string;

  @Expose()
  public url?: string;

  @Expose()
  public urlDescription?: string;

  @Expose()
  public userId: string;

  @Expose()
  @Type(() => TagRdo)
  public tags: TagRdo[];

  @Expose()
  public comments: string[];
}
