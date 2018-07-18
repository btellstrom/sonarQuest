package com.viadee.sonarQuest.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Git_Server")
public class GitServer {
    @Id @GeneratedValue private Long id;

    @JoinColumn(name = "world_id") @OneToOne private World world;

    @NotNull @Column(name = "url") private String url;

    @Column(name = "username") private String username;

    @Column(name = "password") private String password;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getUrl() { return url;}

    public void setUrl(String url) { this.url = url;}

    public String getUsername() { return username;}

    public void setUsername(String username) { this.username = username;}

    public String getPassword() { return password;}

    public void setPassword(String password) { this.password = password;}

    public World getWorld() {
        return world;
    }

    public void setWorld(World world) {
        this.world = world;
    }
}