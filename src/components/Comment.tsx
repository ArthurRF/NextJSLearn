type CommentProps = {
  author_name: string;
  message: string;
}

export function Comment(props: CommentProps) {
  return (
    <div className="comment">

      This is a comment of {props.author_name} and it says: {props.message}

    </div>
  )
}