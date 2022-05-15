import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5 pt-5 text-start'>
            <div className="container">
                <div className="row">
                    <h3>1 Difference between javascript and nodejs</h3>
                    <p>Answer: JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
                    <br />
                    <h3>Differences between sql and nosql databases?</h3>
                    <p>Answer: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    <br />
                    <h3>What is the purpose of jwt and how does it work?</h3>
                    <p>Answer: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;