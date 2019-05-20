import React from 'react';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    font: 'inherit',
  },
};

const PostEditor = ({ onCancel }) => (
  <form style={styles.form}>
    <input
      style={styles.input}
      type="text"
      name="title"
      placeholder="Title..."
    />
    <textarea
      style={styles.input}
      name="message"
      cols="30"
      rows="8"
      placeholder="Message..."
    />
    <div style={styles.actions}>
      <button type="submit">Post</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </div>
  </form>
);

export default PostEditor;
